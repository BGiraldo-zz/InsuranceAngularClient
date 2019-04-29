import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Policy } from '../models/Policy';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};


@Injectable()
export class PolicyService {

  private readonly policyUrl = 'http://localhost:57493/api/policy';

  constructor (private http: HttpClient) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('UserService: ' + message);
  }
  
  list(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.policyUrl)
      .pipe(
        tap(policies => this.log(`fetched policies`)),
        catchError(this.handleError('getting policies', [])),
      );
  }

  add(newPolicy: Policy): Observable<Policy> {
    return this.http.post<Policy>(this.policyUrl+"/save", newPolicy, httpOptions).pipe(
      tap(() => this.log(`added Policy w/ code=${ newPolicy.PolicyId }`)),
      catchError(this.handleError<Policy>('addPolicy'))
    );
  }
}
