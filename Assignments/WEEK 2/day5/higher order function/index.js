// write your own find and findIndex function
// (Hint: using for loop and if else)


// ======================================================== //



const practiceData = [[14,21,23,64], [33,46,51,65]]
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */
solution=practiceData
for(let i=0;i<practiceData.length; i++){
  solution[i] = solution[i].map(function(val){
    return val+1;

  })
}
console.log(solution);

// ======================================================== //

   const array = [23 , 45,467, 789, 34, 989, 56]
 
    // problem => return an array such that numbers at odd index are multiplied by 2
    // and numbers at even index are multiplied by 10
    
const arr = array.map((a,i)=>{
  if(i%2===0){
    return a*10 ;
  }else{
    return a*2;
  }
});
console.log(arr);

// ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
const carObject = {}

carBrands.forEach((key, i) => (carObject[key] = carModel[i]));
console.log(carObject);
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
 
 
// ======================================================== //


 /**
  *  Flattening
 Use the reduce method 
 to â€œflattenâ€ an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */
 const arrays = [[1, 2, 3], [4, 5], [6]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)
console.log(arrays);
// ======================================================== //


 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */
  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  let country = countries.map(f=>{ return f.toUpperCase(); });
  console.log(country);
// ======================================================== //





