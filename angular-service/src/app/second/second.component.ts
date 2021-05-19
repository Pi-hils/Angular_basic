import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service'
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  passName(name:any){
    let ser = new MyCustomService();
    this.msg = ser.sayHello(name.value)
  }

}
