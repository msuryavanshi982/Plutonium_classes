// 1. Print all even numbers in first 50 natural numbers
// HINT: google how to determine if a number is even or not
//@meenakshi_lodhi Rajput

for (let i = 2; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//   output: 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50
//.................................................................................................

// 2. print all odd numbers in natural numbers from 20 to 50
// HINT: google how to determine if a number is odd or not
//@meenakshi_lodhi Rajput

for (let i = 20; i <= 50; i++) {
  if (i % 2 != 0) console.log(i);
}

//   output: -> 21,23,25,27,29,31,33,35,37,39,41,43,45,47,49

//.................................................................................................
// 3. print all numbers that are divisible by 5
// 	[12, 45, 67, 89, 90, 34, 35, 55]
// HINT: google how to check divisibility by a number
//@meenakshi_lodhi Rajput

let array = [12, 45, 67, 89, 90, 34, 35, 55];
for (let i = 0; i < array.length; i++) {
  let a = array[i];
  if (a % 5 === 0) {
    console.log(a);
  }
}

// output:-> 45,90,35,55
//.................................................................................................
// 4. Print all numbers of this array
// // 	 [[1,2], [3,4], [5,6], [7,8]]
// 	// HINT: use nested loops
//@meenakshi_lodhi Rajput

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// output:->  1,2,3,4,5,6,7,8
//.................................................................................................

// 5. Print all prime numbers occurring in 1st 50 natural numbers
// 	HINT1: google how to check if a number is prime or not
//     HINT2: use nested loops
//@meenakshi_lodhi Rajput

let count = 0;
for (let i = 2; i < 51; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      count++;
      break;
    }
  }
  if (count === 0) {
    console.log(i);
  }
  count = 0;
}

// output: ->  1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, and 47.
//.................................................................................................