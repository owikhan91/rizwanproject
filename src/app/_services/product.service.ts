import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
      const headers = {
        // 'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      }
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  
}