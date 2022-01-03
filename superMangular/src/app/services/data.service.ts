import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { superhero } from '../data/superhero';
import { environment } from '../../environments/environment'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = environment.baseUrl;

  myHero1!:Observable<superhero>;
  myHero2!:Observable<superhero>;


  constructor( private http: HttpClient) { }


  getSuperhero(): Observable<superhero> {
    return this.http.get<superhero>(this.baseUrl + this.getRandomArbitrary(1,731).toString()).pipe(
      delay(environment.delay));
  }

  getSuperheroSearched(search : string): Observable<Array<superhero>>{
    return this.http.get<Array<superhero>>(this.baseUrl + "/search/" + search).pipe(
    delay(environment.delay));
  }

  getRandomArbitrary(min:number, max:number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

