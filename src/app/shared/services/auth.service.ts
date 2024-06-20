import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _HttpClient: HttpClient,
    private _TokenService: TokenService
  ) {}
  headers = this._TokenService.token;
  login(body: any): Observable<any> {
    return this._HttpClient.post('http://localhost:3000/auth/login', body);
  }

  logout(): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/auth/logout`, 'yehia', {
      headers: this.headers,
    });
  }
  getUserProfile(){
    return this._HttpClient.get(`http://localhost:3000/user/profile`,{
      headers: this.headers,
    });
  }
}
