import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    return 'czZCaGRSa3F0MzpnWDFmQmF0M2JW';
  }
}
