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
idVar:boolean=false
  buttonValue: string="Store Rec";

  constructor(public pser:ProductService) {  //Only used for DI
    console.log("constructor...1")
  }

  ngOnInit(): void {
    console.log("ngOnIt")
     this.pser.retrieveProductDetails().subscribe(result=>this.products=result);
  }
  storeProduct(){
    if(this.buttonValue =="Store Rec"){
    // console.log("Events shot fire!!!")
    let product = this.productRef.value;
     //console.log(product)
     // this is to store
    this.pser.storeProductDetails(product).subscribe(result=>{
      this.resultMessage="Product stored successfully"
      //this is to show table -to get your file to automatically refresh...
      this.pser.retrieveProductDetails().subscribe(result=>this.products=result)
    }, error=>{
      this.resultMessage="Record not stored. Check ID, should not be the same"
    })
  }else{
   // this.resultMessage=("Please update the record")
   let product = this.productRef.value;
   this.pser.updateProductDetails(product).subscribe(result=>{
       this.resultMessage="Record updated successfully"
       this.pser.retrieveProductDetails().subscribe(result=>this.products=result);
       this.idVar=false;
       this.buttonValue="Store Rec";      
   })
  }
}

  deleteProduct(id:any){
    console.log("deleted" + id)
    this.pser.deleteProductRecord(id).subscribe(result=>{
     this.pser.retrieveProductDetails().subscribe(result=>this.products=result)
  })
}

  updateRec(product:any){
    console.log(product);
    this.productRef.setValue(product)
    this.idVar=true;
    this.buttonValue="Update Rec";
  }

}
