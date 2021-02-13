import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Painting} from '../painting';
import {AppService} from '../app.service';
import {Artist} from '../artist';
import {strict} from 'assert';
import DateTimeFormat = Intl.DateTimeFormat;
import {AllPaintingListComponent} from '../all-painting-list/all-painting-list.component';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;
  closeResult = '';
  artistEmail: string;
  search: string;
  painting = {} as Painting;
  imageSRC: string | ArrayBuffer;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private modalService: NgbModal,
              private appService: AppService
              ) { }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  // tslint:disable-next-line:typedef
  handleLogout() {
    this.authenticationService.logout();
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  postPainting(): void {
     this.painting.date = new Date(new Date().getTime());
     this.painting.image =  this.imageSRC;
     this.appService.createPainting(this.painting)
       .subscribe(response => {
         window.location.reload();
         console.log(response);
       }, error => {
         console.log(error);
       });
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
  searchText(): void {
    this.appService.findArtistBySearch(this.search).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  redirect(): void {
    window.location.href = '/search/' + this.search;
  }
}
