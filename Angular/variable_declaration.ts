var a=10;
a = 20;  //reinitialize
var a=30; //re-declaration

let c=30;
c=40; // (cause an error, can't be redeclare)


// var is a global scope and let is a local scope. E.g
for(var i=0; i<100; i++){
  console.log("i am"+ i);
}
console.log(i);

for(let j=0; j<100; j++){

}
// console.log(j) //can't find it

const k=200;
//k = 300;