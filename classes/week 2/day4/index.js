let array1= [34 , 45,7,89,99,3,23,2543,];
let array2= [23,45,4565,67,78,0 , "Hello brain"];
let [a,...array] = array2;  // rest parameter 
let total = [...array1, ...array2, "Yogita" , 100]; // spread operator 
console.log(array);
console.log(total);

function sum(a,b){
    return a+b;
}
