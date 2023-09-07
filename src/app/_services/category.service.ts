import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory() {
      const headers = {
        // 'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      }
    return this.http.get<any>('https://fakestoreapi.com/products/categories');
  }
  getCategory(category:string) {
    category = category.charAt(0).toLowerCase() + category.slice(1);
    const headers = {
      // 'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  return this.http.get<any>('https://fakestoreapi.com/products/category/'+category);
}
  
}