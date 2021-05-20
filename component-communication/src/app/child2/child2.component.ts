import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,
DoCheck{


  @Input()
  parentArrayNum?:Array<number>

  @Output()
  evenRef = new EventEmitter<number>();

  @Output()
  oddRef = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log("fun...")
    let sumOfEven=0;
    let sumOfOdd=0;
    this.parentArrayNum?.forEach(num=> {
      if(num % 2 == 0){
        sumOfEven = sumOfEven + num;
      }else{
        sumOfOdd=sumOfOdd+num 
      }
    })

    this.evenRef.emit(sumOfEven);
    this.oddRef.emit(sumOfOdd);
  }
}

