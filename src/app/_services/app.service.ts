import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  MAIN_REST = environment.MAIN_REST;

  getService(url: string) {
    // console.log('this.AppUrl + this.MAIN_REST + url========>>>>>>>>', this.AppUrl + this.MAIN_REST + url);
    return this.http.get<any>(this.MAIN_REST + url);
  }

}