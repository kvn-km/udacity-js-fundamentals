/*
 * Programming Quiz: Laugh (5-4)
 */

//var laugh = /* finish the function expression */

let laugh = function(number) {
	let laughNumber = "";
	for (let i = 0; i <= number - 1; i++) {
		laughNumber += "ha";
	}
	return laughNumber + "!";
};

console.log(laugh(10));
