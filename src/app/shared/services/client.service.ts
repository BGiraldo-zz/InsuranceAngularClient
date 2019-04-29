import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Client } from '../models/Client';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ClientService {

  private readonly clientUrl = 'http://localhost:57493/api/client';

  constructor (private http: HttpClient) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ClientService: ' + message);
  }
  
  list(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl)
      .pipe(
        tap(clients => this.log(`fetched clients`)),
        catchError(this.handleError('getting clients', [])),
      );
  }

  add(newClient: Client): Observable<Client> {
    return this.http.post<Client>(this.clientUrl+"/save", newClient, httpOptions).pipe(
      tap(() => this.log(`added Client w/ code=${ newClient.Identification }`)),
      catchError(this.handleError<Client>('addClient'))
    );
  }

}
