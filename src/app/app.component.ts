import { Component } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIBD';
  constructor() {
  }
}
