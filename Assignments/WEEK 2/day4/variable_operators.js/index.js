// problem 1

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// method 1: using nested if else
// method 2: using logical operators

/**
 * use the number variable as user input.
 * 
 * change this number yourself to other values and see if
 * you are getting the right answer
 * example: const number = 12
 */ 
 const num = 13;

 if(num%2==0 && num < 15){
     console.log('a')
 }else if(num%2==0 && num > 15){
     console.log('b')
 }else if(num%2!==0 && num < 10){
     console.log('c')
 }else if(num%2!==0 && num > 10){
     console.log('d')
 }
 

 // =================================================================================================== //
 
 // problem 2
 
 const letters = ["Hi", "my", "name", "is", "Akash"];
 
 /**
  * concat the strings in the aboeve array to get the following result
  * "Hi, my name is Akash."
  * Caution: string has a comma and a full stop
  */
 
 // Hint: solve this using for loop
 

let fullName = "";

for(i=1;i<letters.length;i++){
    fullName = fullName + " " + letters[i] 
}
fullName= letters[0]+ "," +fullName+ '.'

console.log(fullName)

 
 // =================================================================================================== //
 
 // problem 3
 /**
  * what will be the result of the consoles and why?
  * 
  */
 
  let age = 20;
  age = 100;
  const place = "Delhi";
  {
      let age = 30;
      age = 40;
      console.log("this is age one ===>", age);
      console.log("this is place ====>", place);
  }
  
  age = 60;
  console.log("this is age two ===>", age);
  
  // The first answer is age=40 because it is in block scope and when we assign value is 30 then we declare the value of age is 40.
  
  // The second answer is place Delhi because it takes the value of place from the glocal scope when it not found in it's scope.
  
  // The third answer is place Delhi because it takes the value which updated.
 
 
 // =================================================================================================== //
 
 // problem 4
 
 // Find sum and multiplication of  all natural numbers from 10 to 20
 
 let Sum = 0;
let total = 0;

for(i=10;i<=20;i++){
   Sum += i;
   total = total+ i *i ;
}
console.log(Sum)
console.log(total) 
 
 // =================================================================================================== //
 
 // problem 5
 
 // print "yes" if a given year is a leap year else "no"
 //solve this using two methods
 // method 1: using if else
 // method 2: using ternary operator
 
 /**
  *
  * Hint:
  * every year that is exactly divisible by four is a leap year,
  * except for years that are exactly divisible by 100,
  * but these centurial years are leap years if they are exactly divisible by 400
  *
  */
 
 /**
  * use the year variable as user input.
  * 
  * change this number to other values yourself and see if
  * you are getting the right answer
  * example: const year = 1000
  */
 
 const year = 2000;

if(year % 4 ===0 && year%400 === 0){
    console.log('Yes')
}else console.log('No')
 
 // =================================================================================================== //
 
 // problem 6
 
 // find the area of a triangle.  Lengths of its sides are 5, 6, 7
 function triangle(s1,s2,s3) {
  const s = (s1+s2+s3) / 2;
  let area_of_triangle =  Math.sqrt(s * (s - s1) * (s - s2) * (s - s3))
  return area_of_triangle
}

let result = Math.floor(triangle(5,6,7))
console.log(result);
 // =================================================================================================== //
 
 // problem 7
 
 
 // write program to check whether num variable is between 100 and 200 or 400 and 500
 // print true if it is, else print false
 // handle edge cases. Hint: what if number is a string or null?
 
 
 const Num = 20;
 /**
  * use the num variable as user input.
  * 
  * change this number to other values yourself and see if
  * you are getting the right answer
  * example: const num = 250
  */
  const num2 = 299;

  if(typeof num2 !== 'number'){
      console.log("False")
  }else if(num2 >= 100 && num2 <=200){
      console.log('True')
  }else if(num2 >= 400 && num2 <=500){
      console.log('True')
  }else console.log("False")
 
 
 
 // =================================================================================================== //
 
 // problem 8
 
 // you have 3 numbers.
 // write a program which can find the largest number
 const numOne= 3;
 const numTwo = 4;
 const numThree = 5;
const largestNum = Math.max(numOne,numTwo,numThree)

console.log(largestNum)
 /**
  * use the numOne, numTwo and numThree variable as user input.
  * 
  * change them to other values yourself and see if
  * you are getting the right answer
  * example: const numOne = 250, numTwo = 4, numThree = 5
  */
 
 
 // =================================================================================================== //
 
 // problem 9
 
 
 // write a code which prints true ifÂ one of them is 8 or their sum or difference is 8. 
 // Otherwise it should print false
 
 
 const a = 7;
 const b = 9;
 /**
  * use the a and b variable as user input.
  * 
  * change them to other values yourself and see if
  * you are getting the right answer
  * example: const a = 8, b = 5
  */
 
  function myFunction(a, b) {
    if (a == 8 || b == 8) {
      return true;
    }
  
    if (a + b== 8 || (b-a) == 8)
    {
      return true;
    }
  
    return false;
  }
  
  console.log(myFunction(8,5));
 