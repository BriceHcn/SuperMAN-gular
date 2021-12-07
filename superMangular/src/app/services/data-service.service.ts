import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { superhero } from '../data/superhero';
import { environment } from '../../environments/environment'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //baseUrl: string = environment.baseUrl;
  baseUrl: string = "/api/1747455068784069/";

  constructor( private http: HttpClient) { }


  getSuperhero(id:number): Observable<superhero> {
    return this.http.get<superhero>(this.baseUrl + id.toString());
  }
}
