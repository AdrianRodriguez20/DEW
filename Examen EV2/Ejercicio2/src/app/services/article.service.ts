import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, filter, tap } from 'rxjs/operators';

import { Article } from '../interfaces/article';

@Injectable({ providedIn: 'root' })
export class ArticleService {

  private articlesUrl = 'api/articles';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET articles from the server */
  getArticles(): Observable<Article[]> {
    
    return this.http.get<Article[]>(this.articlesUrl)
      .pipe(
        catchError(this.handleError<Article[]>('getarticles', []))
      );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
     
      catchError(this.handleError<Article>(`getarticles id=${id}`))
      );
  }

  searchArticle(term: string): Observable<Article[]> {
    if (!term.trim()) {
      // if not search term, return empty article array.
      return of([]);
    }
    return this.http.get<Article[]>(`${this.articlesUrl}/?name=${term}`)
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
