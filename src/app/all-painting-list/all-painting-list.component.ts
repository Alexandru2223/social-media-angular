import {Component, OnInit} from '@angular/core';
import {Painting} from '../painting';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {AuthenticationService} from '../authentication.service';
import {Artist} from '../artist';
import '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-painting-list',
  templateUrl: './all-painting-list.component.html',
  styleUrls: ['./all-painting-list.component.css']
})
export class AllPaintingListComponent implements OnInit {

  paintings: Painting[];
  imagePath: any;
  checked: boolean;
  profile = new Artist();
  totalLikes: number;
  email: string;
  className: string;

  constructor(private appService: AppService,
              private router: Router,
              private authService: AuthenticationService) {
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
    this.appService.findAllPaintings().subscribe(data => {
      this.paintings = data;
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
  checkArtist(artistEmail){
    if (this.profile.fullName === artistEmail){
      console.log(this.profile.fullName);
    }
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
