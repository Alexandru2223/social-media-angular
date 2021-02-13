import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artist} from './artist';
import {Painting} from './painting';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  public findAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('http://localhost:8080/artist');
  }

  public findAllPaintings(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/paintings');
  }

  public findArtistByEmail(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/artist/email');
  }

  public findArtistBySearch(text): Observable<any> {
    return this.http.get<any>('http://localhost:8080/artist/search/' + text);
  }

  public createArtist(data): Observable<any> {
    return this.http.post<any>('http://localhost:8080/artist/create', data);
  }

  public giveLike(id): Observable<any> {
    return this.http.get<any>('http://localhost:8080/like/' + id);
  }

  public createPainting(data): Observable<any> {
    return this.http.post<any>('http://localhost:8080/paintings/create', data );
  }
  public getTotalLikes(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/artist/likes');
  }
  public findPaintingById(id): Observable<any> {
    return this.http.get<any>('http://localhost:8080/paintings/painting/' + id);
  }
  public getCommentsByPainting(id): Observable<any> {
    return this.http.get<any>('http://localhost:8080/comment/' + id);
  }
  public createcomment(data): Observable<any>{
    return this.http.post<any>('http://localhost:8080/comment/create', data);
  }
  public deletePainting(id): Observable<any>{
    return this.http.delete<any>('http://localhost:8080/paintings/delete/' + id);
  }
}
