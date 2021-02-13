import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router';
import {Artist} from '../artist';
import {AppService} from '../app.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imageSRC: string | ArrayBuffer;
  register = {
    fullName: '',
    email: '',
    password: ''
  };
  artist = {
    day: '',
    month: '',
    year: '',
    country: '',
    image: ''
  };

  submitted = false;
  constructor(private registerService: RegisterService, private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  saveRegister(): void {
    const registerData = {
      fullName: this.register.fullName,
      email: this.register.email,
      password: this.register.password
    };

    const artistData = {
      fullName: this.register.fullName,
      email: this.register.email,
      born: this.artist.year + '-' + this.artist.month + '-' + this.artist.day,
      country: this.artist.country,
      image: this.imageSRC
    };
    this.appService.createArtist(artistData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });

    this.registerService.register(registerData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/validate']);
        }, error => {
          console.log(error);
        }
      );
  }
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageSRC = myReader.result.slice(23);
    };
    myReader.readAsDataURL(file);
  }

}
