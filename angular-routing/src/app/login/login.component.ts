import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'
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

  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }

  checkLoginDetails() {
    let login = this.loginRef.value;
    console.log(login); 
    let flag = 0;       
    this.ls.checkLogin().subscribe(result=> {
          result.forEach(res=>{
                if(res.user==login.user && res.pass==login.pass){
                flag++;
            }
          });
          if(flag>0){
              this.result="Successfully Login"
          }else {
            this.result="Failure try once again"
          }
    },error=> {
    })
  }

}
