function laugh(num) {
	let i = 0;
	let laughs = "";
	while (i < num) {
		laughs += "ha";
		i++;
	}
	return laughs + "!";
}
console.log(laugh(3));
