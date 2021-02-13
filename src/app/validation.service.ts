import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  validationService(token: string){
    return this.http.get('http://localhost:8080/register/' + token);
  }
}
