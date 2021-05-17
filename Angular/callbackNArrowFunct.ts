
function fullName(fname, callback){
  
  return "Welcome " + callback(fname)
}

let maleInfo = function(fname){
  return "Mr "+fname;
}
let femaleInfo = function(fname){
  return "Miss "+fname;
}
console.log(fullName("Henry", maleInfo));
console.log(fullName("Hilda", maleInfo));
console.log(fullName("Ajay", function(fname) {
  return "Mr " +fname;
}))

let num = [10,20,30,40,50];

//1st option
let dis = function(n){
  console.log(n)
}
num.forEach(dis);
//2nd option ES5
num.forEach(function(n){
  console.log(n)
})
num.forEach(dis)

//3rd arrow function ES6
num.forEach(n=>console.log(n));