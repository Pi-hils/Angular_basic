import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerRef = new FormGroup({
   user: new FormControl(),
   pass:new FormControl()
 })

  result?:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
