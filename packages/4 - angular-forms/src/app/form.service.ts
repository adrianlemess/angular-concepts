import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { State, IState } from './shared/state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  saveEnginner(engineer: any) {
    console.log('Saved enginner', engineer);
  }

  getCitiesByStateCode(code: string): Observable<string[]> {
    const params = new HttpParams()
      .append('code', code);
    return this.http.get<IState[]>('http://localhost:3000/state', { params })
      .pipe(
        map(states => {
          return states[0] && states[0].cities || [];
        })
      );

  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>('http://localhost:3000/state');
  }
}
