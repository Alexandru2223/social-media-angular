import { Component, OnInit } from '@angular/core';
import {Painting} from '../painting';
import {Artist} from '../artist';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  paintings: Painting[];
  imagePath: any;
  checked: boolean;
  profile = new Artist();
  totalLikes: number;
  email: string;
  comments: Comment[];
  newComment = new Comment();

  constructor(private appService: AppService,
              private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appService.findArtistByEmail().subscribe(data => {
      this.profile = data;
    }, error => {
      console.log(error);
    });
    this.appService.getTotalLikes().subscribe(data => {
        this.totalLikes = data;
      },
      error => {
        console.log(error);
      });
    const routeParams = this.route.snapshot.paramMap;
    const paintingIdFromRoute = Number(routeParams.get('paintingId'));
    this.appService.findPaintingById(paintingIdFromRoute).subscribe(data => {
      this.paintings = data;
    });
    this.appService.getCommentsByPainting(paintingIdFromRoute).subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
  }

  // tslint:disable-next-line:typedef
  like(id) {
    this.appService.giveLike(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
  // tslint:disable-next-line:typedef
  colorButton(paintingId){
    let val = false;
    this.profile.likes.forEach(x => {
      if (x.paintingId === paintingId) {
        val = true;
      }});
    return val;
  }
  // tslint:disable-next-line:typedef
  addComment(){
    this.newComment.artistId = this.profile.artistId;
    this.newComment.paintingId = this.paintings[0].paintingId;
    this.newComment.date = new Date(new Date().getTime());
    this.appService.createcomment(this.newComment).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
  // tslint:disable-next-line:typedef
  eraseText(){
    this.newComment.comment = '';
    (document.getElementById('text') as HTMLInputElement).value = '';
  }
  // tslint:disable-next-line:typedef
  deletePainting(id){
    this.appService.deletePainting(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

}
