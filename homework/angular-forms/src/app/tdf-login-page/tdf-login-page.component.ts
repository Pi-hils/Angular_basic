import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  result:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){
    console.log("Event Fired..")
    console.log(loginRef.value)
    let user = loginRef.value.user
    let password = loginRef.value.password
    if(user == "Hilda" && password == "123"){
      this.result="Heya, Welcome"
    }else{
      this.result = "Girl, wake up!"
    }
  }

}
