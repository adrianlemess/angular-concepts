import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IUser } from './shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) : Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/${id}`);
  }

  getByName(name: string): Observable<IUser[]> {
    const params = new HttpParams()
      .set('name', name);
    return this.httpClient.get<IUser[]>(`${environment.apiUrl}/users`, { params });
  }

  save(user: IUser): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/users`, user);
  }
}
