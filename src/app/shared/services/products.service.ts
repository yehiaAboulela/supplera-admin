import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _HttpClient: HttpClient,
    private TokenService: TokenService
  ) {}
  token = this.TokenService.token;

  getProducts(): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/product`);
  }

  addProduct(details: any): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/product/add`, details, {
      headers: this.token,
    });
  }

  editProduct(body: object, id: string) {
    return this._HttpClient.put(`http://localhost:3000/product/${id}`, body, {
      headers: this.token,
    });
  }

  deleteProduct(id: string): Observable<any> {
    return this._HttpClient.delete(`http://localhost:3000/product/${id}`, {
      headers: this.token,
    });
  }
}
