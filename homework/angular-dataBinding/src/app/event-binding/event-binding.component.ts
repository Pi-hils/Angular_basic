import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="";
  designation:string="";
  constructor() { }

  ngOnInit(): void {
  }
  fun(){
    console.log("My button is increasing in console")
    this.msg ="Welcome to Angular Events"
    this.designation="Hello, Enter"
  }
}
