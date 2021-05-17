let num3:Array<number> //declaration
let num4: Array<number>=[10,20,30]; //declaration with initialize
let num5: Array<number> =new Array();

//console.log(num3) won't work because it is not initialized
console.log(num5.length);
console.log(num4.length);

num4.push(40);
num5.push(60);

num4.unshift(2);
console.log(num4);
console.log('hi');
num4.splice(3,14);
console.log(num4);
