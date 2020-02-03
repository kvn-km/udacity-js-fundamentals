/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
	let line = "";
	for (let j = 1; j <= length; j++) {
		line += "* ";
	}
	return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(height) {
	let triangle = "";
	for (let i = 1; i <= height; i++) {
		triangle += makeLine(i);
	}
	return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
