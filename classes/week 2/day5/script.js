// -------------------   Functions  ----------------
// -A set of statements that performs a task.

// ==> Example 1
// let a = 6;
// let b = 5;

// function add() {
//     return a + b;
// }
// console.log(add());
output: 11;

// ----------------------------------------
// ==> Example 2

// function abc() {
//     let c = 10;
//     c = c + 8;
//     console.log(c);
// }
// abc();
output: 18;

// 1.) We can run from anywhere
// 2.) We can reuse the code

// abc() run the code which is inside the function abc

// ----------------------------------------
// ==> Return Keyword
// -It gives the power to send the output.

// function abc() {
//     let c = 7;
//     c = c + 9;
//     console.log(c);
//     return c;
// }
// const b = abc();
// console.log(b);
output: 16;

// --The default return value is 'undefined';

// ----------------------------------------
// ===> Parameters and Arguments in Functions.
// => Example 1

// function sum(a,b) {
// Passing Parameters as a and b.
// const c = a + b;
// return c;
// returning the result of a & b in c.
// }
// const d = sum(45,11);
//  Passing Arguments as 45 and 11.
// console.log(d);
output: 56;

//....another exaple of spread as  argument :->
function spread(...A){
    console.log("Think Deeply");
}
spread(324,345,565);
//Dynamic Properties:->

const person ={
    name: "Meenakshi"
}
function Add(a,b){
    if(typeof a =='number'&& (typeof b== 'number')){
        return a + b;
    }else{
        console.log("invalid input");
    }
}

//----------------------------------------
// ==> Example 2

// function sumTwo() {
//     const c = a+b;
//     return c;
// }
// sumTwo();

// function sumThree(a,b,c) {
//     return a+b+c;
// }
// sumThree();

// ----------------------------------------
// ==> Example 3
// --sum of all the inputs using Rest Parameter.

// function sumAll(...n) {
//     console.log(n);
// }

// sumAll(7,8);
output: [7, 8];
// sumAll(10,11,12,13,14,15);
output: [10, 11, 12, 13, 14, 15];

// ----------------------------------------
// ==> Example 4
// --how to handle multiple inputs using loop and convert it into array.

// function sum(...n) {
//     console.log("this is n: ", n);
// }

// sum(6,4,2,1,9);
output: [6, 4, 2, 1, 9];

//----------------------------------------
// ==> Example 4

// function sum(a,b) {
//     const c = a*b;
//     return c;
// }
// console.log(sum(4,6,2));
output: 24;

//----------------------------------------
// ==> Example 5
// --Handling Edge Cases

// function multiply(a, b, c) {
//   if (a === 0 || b === 0 || c === 0) {
//     return 0;
//   }
//   return (a || 1) * (b || 1) * (c || 1);
// }

// console.log(multiply(87, 65, 92));
output: 520260;
// console.log(multiply(6, 5));
output: 30;
// console.log(multiply(2, 3, 0));
output: 0;

//----------------------------------------
// ==> Example 6
// --Arrow Functions:
// =>It allows us to write shorter functions

// let myFunction = (a,b) => a * b;
// let result = myFunction(4,5);
// console.log(result);

output: 20;

//----------------------------------------
// Functions are first class citizens in javascript.

// function demo(a) {
//     return a();
// }

// function demo1() {
//     return 2;
// }

// const result = demo(demo1);
// console.log(result);
output: 2;
// console.log(demo1);
// console.log(demo1());

//-------------------------------------
// => passing function in another function
// function demo4(a) {
//     return a();
// }
// function foo() {
//     return 5;
// }
// const d = demo4(foo);

// -------------------------------------
// => Higher Order Functions
// -- A function which takes another function and returns a function as an argument
// const result = arr3
//     .filter(x => x%2 === 0)
//     .concat(21)
//     .find(x => x > 20);  

// console.log(result);
output: 21
// ---------------------------------------
// --Array.map
// => Example 1
// const array1 = [1, 3, 5, 7, 9];

// const d = array1.push(17);
// console.log(d);
// output: 6;
// So push is not a higher order function

// let result = array1.map((x) => x * 2);
// maps take each elemnt of an array and it jumps to next element and so on after it will print the result
// console.log(result);
// console.log(array1);

// ---------------------------------------
// => Example 2
// let arr2 = [1, 3, 5, 7, 9];
// let results = arr2.map((x) => x + 5);
// console.log(results);

// ----------------------------------------
// => Example 3
// let arr3 = [1, 2, 3, 4, 5];
// let res = arr3.map((x) => x ^ 2);
// console.log(res);
// --Length of the array is 4

// -----------------------------------------
// => Filter Method
// const arrays = [1,5,9,16,17,24];
// const filt = arrays.filter((x) => x%2 === 0);
// console.log(filt);
// true: 0, false: 1,

// --------------------------------------------
// =>find Method

// const array7 = [1,5,7,6,9,24];
// const result = array7.find(x => x%2 === 0);
// console.log(result);
output: 6;
// the length of the filter should be equal to or less than the given input
// -------------------------------------------

// const array7 = [1,5,7,3,9,25];
// const result = array7.find(x => x%2 === 0);
// console.log(result);
output: undefined;

// -------------------------------------------
// => forEach Method
// const arr = [1,5,7,6,9,24];

// let result = 0;
// function sum(x) {
//     result = result + x;
// }
// const output = arr.forEach(sum);
// console.log(result);
output: 52;

// -------------------------------------------
// =>mutable and immutable methods
// push is a mutable method

// const array1 = [1,5,9,17,19];

// array1.map(x * 2)
// console.log(array1);

// pop, push, shift, unshift, sort, splice, reverse these are mutable
// filter, map, find, forEach, reduce, indexOf are immutable methods
// It is best practice to use immutable methods, its preferable

// -------------------------------------------
// =>method chain
const arr1 = [1, 5, 10, 17, 19, 20, 25];

// filter even number
// then add 5 to each number
// then find the number greater than 20
const filt = arr1.filter((x) => x % 2 === 0);
const maps = filt.map((x) => x + 5);
const result = maps.find((x) => x > 20);
console.log(result);

// -------------------------------------------
// =>Example
const arr2 = [9, 5, 6, 2, 23, 56];

const finalResult = arr2
  .filter((x) => x % 2 === 0)
  .map((x) => x + 5)
  .find((x) => x > 20);
console.log(finalResult);

// this is beacuse of the immutable methods, we can chain 
// an array of elemnts and the we can store it in a input
// and then array get updated with every methods we pass 
// into it, and then we get the result in a single variable.  

// -----------------------------------------  
// =>Example
// const arr3 = [1, 5, 10, 17, 19, 20, 25];

// filter even number
// then push 21 to each number
// then find the number greater than 20

// const result = arr3
//     .filter(x => x%2 === 0)
//     .concat(21)
//     .find(x => x > 20);  

// console.log(result);
output: 21

// ------------------------------------------ 
