import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  checkLoginDetails() {
    let login = this.loginRef.value;
    console.log(login);        
  }

}
