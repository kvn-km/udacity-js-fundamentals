/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

//while (/* your stop condition goes here */) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
//}

while (x <= 20) {
  x % 3 === 0 && x % 5 !== 0 ? console.log("Julia") : (x % 5 === 0 && x % 3 !== 0 ? console.log("James") : (x % 3 === 0 && x % 5 === 0 ? console.log("JuliaJames") : console.log(x)));
  x ++;
}
