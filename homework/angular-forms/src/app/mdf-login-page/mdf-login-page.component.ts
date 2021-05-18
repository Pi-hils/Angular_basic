import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl
  });
  result:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(){
    console.log(this.loginRef.value)
    let user = this.loginRef.value.user
    let pass = this.loginRef.value.pass
    if(user=="Hilda" && pass=="123"){
      this.result ="Success feels good"
    }else{
      this.result="try again mate!"
    }
  }

}
