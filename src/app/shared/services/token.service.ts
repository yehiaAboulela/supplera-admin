import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token = { authorization: `mykey__ ${localStorage.getItem('token')}` };
  getUserId(): any {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token') as string;
      return jwtDecode(token);
    }
  }
}
