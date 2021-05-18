import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-dataBinding';
  name:string = 'Hilda Amponsah';
  date:number = 17052021
  image = "https://ibb.co/zSGGZgh"
  
  goBack(): void{}
}
