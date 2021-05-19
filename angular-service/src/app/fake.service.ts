import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
providedIn: 'root' // it is consider as provider attribute in app.module.ts 
})
export class FakeService {
  constructor(public http:HttpClient) { }

  loadFakeData(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe
  }
}