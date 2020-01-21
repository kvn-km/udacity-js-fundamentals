/*

function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

// Quiz 2-8

var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + thingTwo);

// Quiz 2-9

var fullName = "Kevin Kim"

//Quiz 2-10

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
console.log("$" + total.toFixed(2));

// Quiz 2-11

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";

// Quiz 2-12

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

// 

const price = 15.00; // price of our hammer
let money = 20.00; // how much money we have
if (money >= price) {
  console.log("Buy it!");
} else {
  console.log("Don't buy it!");
}

// Quiz 3-2

const number = 2;
if (number % 2 === 0){ // "===" is for STRICT equality
  console.log("even");
} else {
  console.log("odd");
}

// Quiz 3-3

var musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}

// Quiz 3-4

/*
 * Programming Quiz: Murder Mystery (3-4)


// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room == "dining room" & suspect == "Mr. Parkes") {
  weapon = "knife";
  solved = true;
} else if (room == "ballroom" & suspect == "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room == "billiards room" & suspect == "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room == "gallery" & suspect == "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
}


if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

// Quiz 3-5

let balance = -10.987;
let isActive = false;
var checkBalance = true;

if (checkBalance) {
  if (balance > 0 && isActive === true) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (isActive === false) {
    console.log("Your account is no longer active.");
  } else if (balance === 0) {
    console.log("Your account is empty.");
  } else if (balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
  }
} else {
  console.log("Thank you. Have a nice day!");
}

// Quiz 3-6

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here

if ((flavor == "vanilla" || flavor == "chocolate") && (vessel == "cone" || vessel == "bowl") && (toppings == "sprinkles" || toppings == "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

// Quiz 3-7

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 19.99;
var shirtLength = 28.99;
var shirtSleeve = 11;

// Write your if/else code here

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
  console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
  console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("N/A");
}

// Quiz 3-8

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;

var category = (eatsPlants && eatsAnimals ? "omnivore" : (eatsPlants && !eatsAnimals ? "herbivore" : eatsAnimals ? "carnivore" : undefined));

console.log(category);

*/

// Quiz 3-9

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 

// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
  case "no high school diploma":
    salary = "25,636";
    break;
  case "a high school diploma":
    salary = "35,256";
    break;
  case "an Associate's degree":
    salary = "41,496";
    break;
  case "a Bachelor's degree":
    salary = "59,124";
    break;
  case "a Master's degree":
    salary = "69,732";
    break;
  case "a Professional degree":
    salary = "89,960";
    break;
  case "a Doctoral degree":
    salary = "84,396";
    break;
}

console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`);

*/

// 