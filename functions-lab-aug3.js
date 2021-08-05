//Write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting.
const printGreeting = (name) => {
    return 'Watch out, ' + name + ', here come the Ghostbusters!';
}
console.log(printGreeting("Slimer"));

// Write a function reverseWordOrderthat accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

const reverseWordOrder = (string) => {
    return string.split(' ').reverse().join(' ');

}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// Write a function called calculate.

// This function should take three arguments, two numbers and a string.

// Name the parameters num1, num2, and operation.

// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

const calculate = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2
    } if (operation === 'sub') {
        return num1 - num2;
    } if (operation === 'mult') {
        return num1 * num2;
    } if (operation === 'div') {
        return num1 / num2;
    } if (operation === 'exp') {
        return num1 ** num2;
    }

};
console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));

//printConsecutives
// Write a function printConsecutivesthat can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.
const printConsecutives = (arr) => {
     for (let i = 0; i < arr.length; i++)
         if (arr[i] - arr[i - 1] === 1 && arr[i - 1] - arr[i - 2] === 1) {
             console.log (`${arr[i-2]} ${arr[i-1]} ${arr[i]}`)
         }
 };
 printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);
 
// Write a function letterReversethat accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

const letterReverse = (string) => {
    return string.split('').reverse().join('').split(' ').reverse().join(' ')
    }
    
console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));