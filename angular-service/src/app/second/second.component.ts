import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { MyService } from '../myservice.service'
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg:string="";
  constructor(public mySecSer: MyService) { }

  ngOnInit(): void {
  }
  passName(name:any){
    // let ser = new MyCustomService();
    // this.msg = ser.sayHello(name.value)
    this.msg = this.mySecSer.sayHello(name.value)
  }

}
