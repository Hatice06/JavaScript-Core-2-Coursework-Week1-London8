/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?
*/

let dog = {
  breed: "Dalmatian",
  name: "Spot",
  isHungry: true,
  happiness: 6
};
/*
Answer:
 breed property is a string
 name properyt is a string
 isHungry property is a Boolean
 happiness is a number
 */

/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/

let dogName = dog.name; // complete the code
let dogBreed = dog.breed;// complete the code

console.log(`${dogName} is a ${dogBreed}`);

/* EXPECTED RESULT

  Spot is a Dalmatian

*/