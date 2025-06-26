import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:8089/api/auth'; // bien port 8089 !

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.API_URL}/register`, user);
  }
}
