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
    return this._HttpClient.post(
      'https://supplera-backend-o6om.onrender.com/auth/login',
      body
    );
  }
}
