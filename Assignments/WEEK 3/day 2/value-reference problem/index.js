const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};

console.log(person);
const newPerson = person;
newPerson.name = "Rahul";
newPerson.address.pincode = 4567;
newPerson.address.emails.push('asd@outlook.com');
console.log(newPerson);
/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * 
 * make sure that original person is not affected by these operation
 * 
 *  your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
    }
}
  
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */




/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * 1. assignment operator
 * 2. equality operator
 *
 *
 */
// ===> The fundamental difference between primitive and non-primitive is that primitive values are immutable and non-primitive values are mutable and Primitives are stored by value while Non-Primitive (objects) are stored by reference.
// Primitive value is stored directly in the location that the variable accesses. Reference values are objects that are stored in the heap.


/*
 1. assignment operator =>> It is used for assigning the value to a variable.
 2. equality operator =>> It is used for comparing two values. It returns 1 if both the values are equal otherwise returns 0.
 ==
 ===

 **/