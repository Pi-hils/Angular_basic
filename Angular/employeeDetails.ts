class Employee {
  // id:number;
  // name:string;

  constructor(public id:number,private name:string){
    console.log('employee class object created...')
    // this.id =id;
    // this.name=name;


  }
  displayName(){
    return "hilda"
  }
  
  disEmpInfo():void{
    console.log("employee function");
    console.log("id is "+this.id);
    console.log("name is "+this.name)
  }
}
let emp3 = new Employee(101,'Hils');
emp3.disEmpInfo();
console.log(emp3.id) //public can be accessed
// console.log(emp3.name)