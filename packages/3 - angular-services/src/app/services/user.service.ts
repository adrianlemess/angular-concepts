import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../shared/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  getByUsername(username: string): Observable<User[]> {
    const params = new HttpParams()
      .append('username', username);

    return this.http.get<User[]>(`${environment.apiUrl}/users`, { params });
  }

  saveUser(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users`, user);
  }
}
