const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

function profileLookup(name, property) {
    //write your code here
    for (let i = 0; i < facebookProfiles.length; i++) {
        const profile = facebookProfiles[i];
        if (profile.firstName === name) {
          return profile[property] ? profile[property] : "no such property";
        }
      }
    
      return "person does not exist";
}

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

function getNamesFromGurgaon() {
  const result = [];
  for (let i = 0; i < facebookProfiles.length; i++) {
    const person = facebookProfiles[i];
    if (person.address.location === "gurgaon") {
      //Edge case: when last name is not present
      const name = person.firstName + " " + (person.lastName || "");
      result.push(name);
    }
  }
  return result;
}
console.log(getNamesFromGurgaon())

//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

function findFullName(stateName) {
    //write your code here
    const person = facebookProfiles.find(
        (person) => person.address.state === stateName
      );
    
      //using ternary
      return person
        ? person.firstName + " " + (person.lastName || "")
        : "person not found";
    
}
//.............................................................................//
const fullNames = facebookProfiles
  .filter((person) => person.address.location === "gurgaon")
  .map((person) => person.firstName + " " + (person.lastName || ""));

console.log(fullNames);
//-----------------------------------------------------------------------------//
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {
    //write your code here
    const result = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
      const person = facebookProfiles[i];
      if (person.address.location === "gurgaon") {
        //Edge case: when last name is niot present
        const name = person.firstName + " " + (person.lastName || "");
        result.push(name);
      }
    }
    return result;
}
console.log(getDLStatus());
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    //write your code here
    const person = facebookProfiles.find(
        (person) => person.address.state === stateName
      );
    
      //using ternary
      return person
        ? person.firstName + " " + (person.lastName || "")
        : "person not found";
}
console.log(getFullName());

// 4. write a function which returns full names in an array

// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    //write your code here
        let likesArr = [];
        for (let i = 0; i < facebookProfiles.length; i++) {
          // edge case:
          const likes = facebookProfiles[i].likes || [];
      
          // we can use push as well
          likesArr = [...likesArr, ...likes];
        }
        return likesArr;
      }

console.log(getLikes());
// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
    //write your code here
    let name = "not found";
    for (let i = 0; i < facebookProfiles.length; i++) {
      const person = facebookProfiles[i];
      if (person.address.location === "delhi" && person.hasDrivingLicense) {
        name = person.firstName + " " + (person.lastName || "");
        break;
      }
    }
  
    return name;
  }
  
console.log(getNameFromDelhiWithDL());
//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
    //write your code here
    let name = "not found";
    for (let i = 0; i < facebookProfiles.length; i++) {
      const person = facebookProfiles[i];
      if (person.address.location === "delhi" && person.hasDrivingLicense) {
        name = person.firstName + " " + (person.lastName || "");
        break;
      }
    }
  
    return name;
      }
console.log(getNameOfDriverWithoutDL());
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh



