// problem 1

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// using nested if else
// using logical operators


const number = 20


// method 1
if (number % 2 === 0) {
    if (number < 15) {
        console.log('a')
    } else {
        console.log("b");
    }
} else {
    if (number < 10) {
        console.log("c");
    } else {
        console.log("d");
    }
}


// method 2
if (number % 2 === 0 && number < 15) {
    console.log("a");
} else if (number % 2 === 0 && number > 15) {
    console.log("b");
} else if (number % 2 !== 0 && number < 10) {
    console.log("c");
} else if (number % 2 !== 0 && number > 10) {
    console.log("d");
}

// =================================================================================================== //



// problem 2



const letters = ["Hi", "my", "name", "is", "Akash"];


let result = "";
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    if (index === 0) {
        result = result + element + ",";
        continue;
    }

    result = result + " " + element;
}

console.log(result);


// =================================================================================================== //

// problem 3

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

// answers
/**
 * this is age one ===>", 40
 * this is place ====>", Delhi
 * this is age two ===>", 60
 */



// =================================================================================================== //

// problem 4

// Find sum and multiplication of  all natural numbers from 10 to 20
let sum = 0;
let multiplication = 1
for (let number = 10; number <= 20; number++) {
    sum = sum + number
    multiplication = multiplication * number
}

console.log(sum, multiplication);

// =================================================================================================== //

// problem 5

// Check whether a given year is a leap year
 
// create a variable and store a random year in it 
// now write code, which should return  true or false, depending whether the value in the above variable is leap year or not

const year = 2004

// method 1

if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
} else if (year % 4 === 0) {
    console.log(true);
} else {
    console.log(true);
}

// meth0d 2

const isLeapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
console.log(isLeapYear);

/**
 * 
 * explanation: 
 * every year that is exactly divisible by four is a leap year, 
 * except for years that are exactly divisible by 100, 
 * but these centurial years are leap years if they are exactly divisible by 400
 * 
 */
// =================================================================================================== //

// problem 6

// find the area of a triangle.  Lengths of its sides are 5, 6, 7
const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 + side3) / 2;
const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);


// =================================================================================================== //

// problem 7

// create a variable and store a number inside it
// write program to check whether a given variable is between 100 and 200
// write program to check whether a given variable is between 100 and 200 or 400 and 500
// handle edge cases

const num = 20
// part one
if (num > 100 && num < 200) {
    console.log(true)
} else {
    console.log(false);
}

// part two
if ((num > 100 && num < 200) || (num > 400 && num < 500)) {
    console.log(true);
} else {
    console.log(false);
}


// =================================================================================================== //

// problem 8

// you have 3 numbers.
// write a program which can find the largest number
const a = 3
const b = 4
const c = 5

// method 1
if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}

// method 2
const numbers = [13, 4, 5];
let max = 0;
for (let index = 0; index < numbers.length; index++) {
    const num = numbers[index];
    if (num > max) {
        max = num;
    }
}
console.log(max);


// =================================================================================================== //

// problem 9

// create two variables and assign numbers to them
// now write a code which returns true ifÂ one of them is 8 or their sum or difference is 8. Otherwise it should return false

const a = 7;
const b = 9

if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
    console.log(true);
} else {
    console.log(false);
}
