import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, filter, tap } from 'rxjs/operators';

import { Pokemon } from '../interfaces/pokemon';
@Injectable({
  providedIn: 'root'
})
export class WildService {

    private pokemonsUrl = 'api/pokemons';  // URL to web api
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(
      private http: HttpClient) { }
  
    /** GET pokemons from the server */
    getPokemons(): Observable<Pokemon[]> {
      
      return this.http.get<Pokemon[]>(this.pokemonsUrl)
        .pipe(
          catchError(this.handleError<Pokemon[]>('getpokemons', []))
        );
    }

      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  }
