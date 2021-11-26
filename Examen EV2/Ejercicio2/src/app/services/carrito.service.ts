import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, filter, tap } from 'rxjs/operators';

import { Article } from '../interfaces/article';

@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private articlesUrl = 'api/articles';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
 

  constructor(private http: HttpClient) { }

 
  addArticle(article: Article): Observable<any> {
    return this.http.put(this.articlesUrl, article, this.httpOptions)
  }

  getList(): Observable<Article[]> {
    
    return this.http.get<Article[]>(this.articlesUrl)
      .pipe(
        catchError(this.handleError<Article[]>('getarticles', []))
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
