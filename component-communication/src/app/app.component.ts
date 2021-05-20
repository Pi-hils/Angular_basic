import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';

  parentName:string="";
  passNName(nameRef:any){
    this.parentName=nameRef.valuw
  }
}
