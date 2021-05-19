import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from './employee.model'

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})

export class StructureDirectiveComponent implements OnInit {
  empRef = new FormGroup({
    empid: new FormControl(),
    empname:new FormControl(),
    empsalary: new FormControl()
  });

  // step 1
  fanme:string = "Hilda Amponsah";
  f1:boolean=true;
  f2:boolean=false;
// styling a variable inn Angular - easier than CSS
  styleVariable={'color':'red','font-size':'24px'}

  flag:boolean=false;
  b1:string="show";
  stdNames:Array<string>=["Hilda","Ross","Jashana","Sabiq"]

  employees: Array<Employee>=new Array();
  constructor() { 
     let emp1 = new Employee(1,"Hilda", 70000); //creating an instance of the employe class -in construc because this is where it will get loaded)
     let emp2 = new Employee(2,"Velma", 30000);
     let emp3 = new Employee(3,"Lianna", 70000);
     let emp4 = new Employee(4,"Yasmin", 50000);
     this.employees.push(emp1);
     this.employees.push(emp2);
     this.employees.push(emp3);
     this.employees.push(emp4);
     this.employees.push(new Employee(5,"Ursula",4000));
  }
  changeColor(){
    this.f1=!this.f1;
    this.f2=!this.f2;
  }
  // dynamically adding the employees to the table
  addEmployee(){
    console.log(this.empRef.value);
    let empId = this.empRef.value.empid;
    let empName = this.empRef.value.empname;
    let empSalary = this.empRef.value.empsalary;
    let emp = new Employee(empId, empName,empSalary);
    this.employees.push(emp)
  }
     ngOnInit(): void {
  }
  change(){
    if(this.b1=="show"){
      this.b1 ="hide"
      this.flag = true;
    }else{
      this.flag=false;
      this.b1="show"
    }
  }
}
