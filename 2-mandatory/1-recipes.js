/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

// write code here

let myFavoriteRecipe = {
  title:"Cheesecake",
  servings: 6,
  ingredients: [
    "egg", 
    "icing sugar",
    "cream cheese",
    "biscuits",
    "strawberry sauce"
  ]
}

console.log(myFavoriteRecipe.title);
console.log("Serves: " + myFavoriteRecipe.servings);
console.log("Ingredients: ");
console.log(myFavoriteRecipe.ingredients[0]);
console.log(myFavoriteRecipe.ingredients[1]);
console.log(myFavoriteRecipe.ingredients[2]);
console.log(myFavoriteRecipe.ingredients[3]);
console.log(myFavoriteRecipe.ingredients[4]);