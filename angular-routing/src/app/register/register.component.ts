import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

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
  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }

    registerAccount(){
      let login = this.registerRef.value;
      this.ls.createLogin(login).subscribe(data=>{
        this.result="Account Created successfully"
      },error=> {
        this.result ="Account didn't created"
      })
      this.registerRef.reset();
    }
  
  }


