/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

function hasEnoughPlayers(number) {
  let x = "";
  if (number.length >= 7) {
    x = true;
  } else {
    x = false;
  }
  return x;
}

var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter"
];
console.log(hasEnoughPlayers(team));
