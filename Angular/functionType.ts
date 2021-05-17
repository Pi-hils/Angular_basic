function info(){
  console.log("Normal style function");
}
info();

//Expression style function with name
let dis =function display(){
  console.log("Expression style function")
}
dis();

let dis1 = function(){
  console.log('Expression style with annoynymous function')
}
dis1();

function add(a:number,b:number){
  return a+b;
}

function sayHello():string{
  return "Welcome"
}

//returns no type
function nothing():void{
  console.log("Welcome")
}

function information():any {
  return 1100;
  return 'Hilda'
}

//REST OPERATOR
function employeeInfo(id:number, name:string, salary:number,...skillSet:string[]){
  console.log(id)
  console.log(name)
  
  console.log("Number of skillset is "+ skillSet.length)
}
employeeInfo(1,"Ravi", 120000);
employeeInfo(2,"Raju",15000,'C');
employeeInfo(3,"Ray",25000,"HTML","CSS","C++","Ruby")