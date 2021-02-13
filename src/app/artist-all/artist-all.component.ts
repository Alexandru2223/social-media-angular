import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';
import {AppService} from '../app.service';

@Component({
  selector: 'app-artist-all',
  templateUrl: './artist-all.component.html',
  styleUrls: ['./artist-all.component.css']
})
export class ArtistAllComponent implements OnInit {

  artists: Artist[];
  constructor(private appService: AppService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appService.findAllArtists().subscribe(data => {
      this.artists = data;
    });
  }

}
