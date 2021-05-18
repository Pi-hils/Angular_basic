import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id:number=100;
  name:string ="Hilda Amponsah"
  result :boolean =true;


  display() : string{
    return "welcome "+ this.name;
  }
}
