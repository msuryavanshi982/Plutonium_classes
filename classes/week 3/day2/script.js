// --------- pass by value --------------
// const a = 1;
// const b = a;

// console.log(a === b);
// output: true
// console.log(a);
// console.log(b);

// ------------ pass by refrence -------------
// here we are passing the location of that variable
// const c = [2];
// const d = c;

// console.log(c);
// console.log(d);
// console.log(c === d);
// output: true

// const e = [2];
// console.log(c === e);
// output: false

// d.push(3);
// console.log(d);
// output: [2,3];
// console.log(c);
// output: [2,3];
// console.log(e);

// ------------------------------------------
// const f = [3];
// const g = [...f];

// console.log(g);

// equality operator
// const h = [3];
// console.log(g === h);
output: false;

// ---------------------------------

// const i = [[1]];

// we are checking the indexes of the given array
// console.log(i[0][0]);
// output: 1

// ----------------------------------
// const k = [[[[5]]]];
// console.log(k[0][0][0][0]);
// output: 5
// -----------------------------------

// const m = [1,2];
// console.log(m[1]);
// output: 2

// const n = [...m];
// console.log(m === n);
// output: false

// m.push(5);
// console.log(m);
// output: [1,2,5]
// console.log(n);
// output: [1,2]

// const o = [1, [2]];
// o[1].push(3);
// console.log(o);
// output: [1, [2,3]];
// o[1][1] = 4;
// console.log(o)
// output: [ 1, [ 2, 4 ] ]

// ------------------------------------
// =>shallow copy  --------------
// const p = [1, [2]];
// const q = [...p];

// p[1].push(10);
// console.log(q);
// output: [1, [2,10]]

// that is why this method is called shallow copy because we copy onlt the outer array of the elments

// -------------------------------------
// =>deep copy ---------
// const r = [2,[3]];
// const s = [...r];  //this copyies only the first array

// console.log(r[1] === s[1]);
// output: true
// const t = [...r, [...r[1]]];
// output: [ 2, [ 3 ], 3 ];
// console.log(t);

// const u = [r[0], ...r[1]];
// console.log(u);
// output: [2,3]

// ------------------------------------------
// const v = [2,4];

// const w = JSON.parse(JSON.stringify(v));
// console.log(w);

// console.log(v === w);
output: false;

// v.push(3);
// console.log(v);
// output: true;
// console.log(w);

// ----------------------------------------
// function sum(a,b) {
//     return function inner() {
//         const a =3;
//         console.log(a);
//     }
// }
// let res = sum(2,3);
// // console.log(res);
// output: 5

// ---------------------------------------

// function inner() {
//     console.log(a);
// }
// function sum(a,b) {
//     return inner;
// }
// const d = sum(2,3);
// d();
// output: ReferenceError

// ----------------------------------------------
// Pass by value
// it is a primitive data types in which numbers, booleans, strings, null,  undefined
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// b = a + 5;
// console.log(b);
// console.log(a);

// pass by refrence is a non primitive data types in which objects, arrays
// let c = {
//     name: "Rahul",
//     pass: 123,
// } ;

// let d = c;
// console.log(c);
// console.log(d);

// d.pass = 456;
// console.log(c);
// console.log(d);

// ------------------------------------------
// closures in javascript
// const outerFun = (a) => {
//     let b = 10;
//     const innerFunc = () => {
//         let sum = a +b;
//         console.log("The sum of two number " + sum);
//     }
//     innerFunc();
// }
// outerFun(5);

// --------------------------------------

// deep and shallow

let developer1 = {
  name: "Rahul",
  skills: { primary: "backend", secondary: "frontEnd" },
};

let developer2 = JSON.parse(JSON.stringify(developer1));
developer2.name = "Nishant";
developer2.skills.primary = "nodejs";
console.log(developer2);
console.log(developer1);

// -------------------------------------------------------
