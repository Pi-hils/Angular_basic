import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http:HttpClient ) {}
  storePostDetails(post:any){
     this.http.post("http://localhost:4200/",post).subscribe(result=>console.log(result), err=>console.log(err), ()=>console.log("completed"))
 
    // return this.http.post<Post>("http://localhost:3000/products",product);
  }

}
