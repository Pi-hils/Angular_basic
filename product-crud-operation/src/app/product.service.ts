import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import {Product} from './product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(public http:HttpClient) { }//DI for HttpCliennt

    //In post 1st parameter url and 2nd json object
    storeProductDetails(product:any):Observable<Product>{
      // this.http.post("http://localhost:3000/products",product).subscribe(result=>console.log(result), err=>console.log(err), ()=>console.log("completed"))
   
      return this.http.post<Product>("http://localhost:3000/products",product);
    }

    //[] means all
    retrieveProductDetails():Observable<Product[]>{
      return this.http.get<Product[]>("http://localhost:3000/products");
    }

    deleteProductRecord(id:any):Observable<Product>{
      return this.http.delete<Product>("http://localhost:3000/products/" + id)   
     }
   
}
