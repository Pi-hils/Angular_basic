import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import {Product} from '../product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productRef = new FormGroup({
    id:new FormControl(),
    pname: new FormControl(),
    price: new FormControl()
  });

  resultMessage:string="";
  products?:Array<Product>;

  constructor(public pser:ProductService) {  //Only used for DI
    console.log("constructor...1")
  }

  ngOnInit(): void {
    console.log("ngOnIt")
     this.pser.retrieveProductDetails().subscribe(result=>this.products=result);
  }
  storeProduct(){
    // console.log("Events shot fire!!!")
    let product = this.productRef.value;
     console.log(product)
     // this is to store
    this.pser.storeProductDetails(product).subscribe(result=>{
      this.resultMessage="Product stored successfully"
      //this is to show table -to get your file to automatically refresh...
      this.pser.retrieveProductDetails().subscribe(result=>this.products=result)
    }, error=>{
      this.resultMessage="Record not stored. Check ID, should not be the same"
    })
  }

}
