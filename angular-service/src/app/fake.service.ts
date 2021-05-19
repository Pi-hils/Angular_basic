import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs'; //third party
import { Fake } from './fake.model'
@Injectable({
providedIn: 'root' // it is consider as provider attribute in app.module.ts 
})
export class FakeService {
  constructor(public http:HttpClient) { }

  loadFakeData(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>console.log(data),
    error=>console.log(error),  //async coding
    ()=>console.log("completed"))
  }

  getFakeData():Observable<Fake[]>{
    // if you want to load a data in any table, you must load convert to srrsy first
    return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos")
  }
}