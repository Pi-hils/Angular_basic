import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import {LoginService } from '../login.service'

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
  result?:string="";

  constructor(public ls:LoginService, public router:Router) { }

  ngOnInit(): void {
  }

  checkLoginDetails() {
    let login = this.loginRef.value;
    console.log(login); 
    let flag = 0;       
    this.ls.checkLogin().subscribe(result=> {
          result.forEach(res=>{
                if(res.user==login.user && res.pass==login.pass){
                  //for login and register(siblings) to communocate, we need to setItem with key,value
                  sessionStorage.setItem("userInfo",res.user)
                flag++;
            }
          });
          if(flag>0){
              this.result="Successfully Login"
              this.router.navigate(["home"]);
          }else {
            this.result="Failure try once again"
          }
    },error=> {
    })
  }

}
