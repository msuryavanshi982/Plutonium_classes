// const person = {
//     name : "Meenakshi",
//     Id : 100 ,
//     liking : ["Yoga", "craft making", "poetry", "dancing"],
//   Address : {
//         city : "Meerut",
//         pincode : 250002,
//         state : "UP"

//     }
// }

// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
//     if(key=="name"){
//         person[key]="Yogita";     // to access value 
//     }
// }
// console.log(person);


// let array =[324,56,67,7,789,"hello"];

// let a = 5;
// let b=6;
// let c= 7;
// let d= 49;
// let e= 60;
// function add(x,y,...arr){
//     let sum =0;
//     console.log(x,y);
//     for(let i=0;i<arr.length; i++){
//         sum= sum+arr[i];
//     console.log(sum);  // 7,56,116
//     }
//     console.log(sum);    //116
//     console.log(arr);
//     return sum+100;
// }
//  console.log(add(a,b,c,d,e));


// console.log(array[0]);
// let deletedEle = array.shift()
// console.log(array[0]);
// console.log(deletedEle);
// array.pop();
// console.log(array);
// array.splice(1,0,"world");
// console.log(array);

let arr1=[23,54,7867,0];
let arr2=[23,46,67,876,6];

let array = [...arr1,...arr2];
console.log(array);

function mult(a,b,c,d){
    console.log(a*b*c*d);
}
mult(23,54,7867,0);  // ...arr1