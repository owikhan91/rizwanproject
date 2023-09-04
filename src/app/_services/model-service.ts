import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModelService {
  private data = {

  };

  //preConfigData:any;


  getDataByKey(key: any) {
    let encodedSession = window.localStorage.getItem(key);
    return JSON.parse(encodedSession ? atob(encodedSession) : "{}");
    // return this.data[key];
  }

  setDataByKey(key: any, data: any) {
    window.localStorage.setItem(key, btoa(JSON.stringify(data)))
    // this.data[key] = data;
  }

  getData() {

    return this.data;
  }

  setEmptyData() {
    this.data = {};
  }
}