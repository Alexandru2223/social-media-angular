import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-account-validation',
  templateUrl: './account-validation.component.html',
  styleUrls: ['./account-validation.component.css']
})
export class AccountValidationComponent implements OnInit {

  token: string;
  invalidToken: boolean;
  validToken: boolean;
  errorMessage = 'Invalid Token';
  successMessage: string;
  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  handleValidation() {
      // @ts-ignore
    this.validationService.validationService(this.token).subscribe(() =>
      {
        this.invalidToken = false;
        this.validToken = true;
        this.successMessage = 'Validation Successful';
      }, () => {
        this.invalidToken = true;
        this.validToken = false;
      });
  }

}
