import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl: string;
  constructor(private http: HttpClient) {
    this.registerUrl = 'http://localhost:8080/register';
  }
  public register(data): Observable<any> {
    return this.http.post<any>(this.registerUrl, data);
  }
}
