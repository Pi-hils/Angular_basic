import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {
sum:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  addNumber(firstRef:any,secondRef:any){
    console.log(firstRef.value)
    console.log(secondRef.value)
    this.sum =eval(firstRef.value)+eval(secondRef.value)
  }
}
