// prompt accepts user input, parseInt analyzes that input and returns it as an integer
let answer = parseInt(prompt('Please enter the number you \
would like to FizzBuzz up to: '));

// loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
    console.log(i);
    }
}
