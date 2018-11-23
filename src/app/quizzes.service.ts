import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Quiz} from './quiz_components/quiz';
import {catchError, map, tap} from 'rxjs/operators';
import {AlertsService} from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  private quizzesUrl = 'http://localhost:8001/api/v1/quizzes';
  private answersUrl = 'http://localhost:8001/api/v1/answers';
  constructor(
    private http: HttpClient,
    private alertsService: AlertsService
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);
      const theAlert = {
        type: 'danger',
        message: `Failed the following operation: ${operation}`
      };
      this.alertsService.add(theAlert);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizzesUrl)
      .pipe(
        tap(_ => console.log('fetched quizzes ')),
        catchError(this.handleError('getQuizzes', []))
      );
  }

  getQuiz(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.quizzesUrl}/?id=${id}`)
      .pipe(
        map(quizzes => quizzes[0]),
        tap(_ => console.log(`fetched quiz with id ${id}`)),
        catchError(this.handleError<Quiz>(`getQuiz id=${id}`))
    );
  }
}
