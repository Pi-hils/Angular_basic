import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { MyService } from '../myservice.service' 


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg:string="";
  constructor(public myser:MyService) { }

  ngOnInit(): void {
  }
  passName(name:any){
    // let ser = new MyCustomService();
    // this.msg = ser.sayHello(name.value)
    this.msg =this.myser.sayHello(name.value);
  }

}
