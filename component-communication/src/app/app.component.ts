import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';

  parentName:string="";
  cName?:string=""


  passName(nameRef:any){
    this.parentName=nameRef.value
  }
  addNumber(numberRef:any){

  }
}
