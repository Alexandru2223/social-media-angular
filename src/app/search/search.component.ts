import { Component, OnInit } from '@angular/core';
import {Painting} from '../painting';
import {Artist} from '../artist';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: Artist[];
  imagePath: any;
  checked: boolean;
  profile = new Artist();
  totalLikes: number;
  email: string;
  className: string;

  constructor(private appService: AppService,
              private router: Router,
              private authService: AuthenticationService,
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
    const text = String(routeParams.get('text'));
    this.appService.findArtistBySearch(text).subscribe(data => {
      this.artists = data;
      console.log(this.artists);
    }, error => {
      console.log(error);
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
