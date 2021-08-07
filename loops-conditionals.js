//Let's get Mathy!
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16
//Round a down
//console.log(Math.floor(a))
//Round b up
//console.log(Math.round(b))
// Find the absolute value of b - a
//console.log(Math.abs(b-a))
// Find the largest number of a, b, c, d, e
//console.log(Math.max(a, b, c, d, e))
// Find the smallest number of a, b, c, d, e
//console.log(Math.min(a, b, c, d, e))
// Find the square root of e
//console.log(Math.sqrt(e))
// Raise e to the power of d
//console.log(Math.pow(e, d))
// Make a digital die 0 generate a random number between 1 - 6
//console.log(Math.floor(Math.random() * 7))

// Strings - Switcharoo
// Create a variable called firstVariable.
// assign it the value of a string: "Hello World"
// On the next line, change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// On the next line, change the value of secondVariable to a string.
// What is the value of firstVariable?

let firstVariable = 'Hello World';
// console.log(firstVariable)
firstVariable = 10;
// console.log(firstVariable)
let secondVariable = firstVariable;
// console.log(secondVariable, firstVariable)
 secondVariable = 'Hello Again?';
 console.log(secondVariable, firstVariable)

// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated

const yourName = 'Katie';
console.log(`Hello, my name is ${yourName}.`)

// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.

const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

if (a < b) {
    console.log('That is the truth!')
};
if (d > c) {
    console.log('Sure is!')
};
if ('Peanut' === 'Peanut') {
    console.log('A peanut is a peanut')
};
if (a < b > c) {
    console.log('I thought so..')
};
if (a <= a < d) {
    console.log('I didn\'t know I could do that!')
};
if (e === 'Jelly Bean') {
    console.log('the e variable is a Jelly Bean!')
};
if (48 == '48') {
    console.log('that is not very strict!')
};
if ('e' !== 'eh') {
    console.log('that is some inequality')
};

// Write code that will print out "mooooo" if the variable animal is equal to cow.

// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
const animal = 'cow';
if (animal === 'cow') {
    console.log('mooooo')
} else {
    console.log('Hey! You\'re not a cow.')
};

//Write a variable that will hold a person's age.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

const age = 16;
if (age >= 16) {
    console.log('Here are the keys')
} else {
    console.log('Sorry, you\'re too young.')
};

//Write code that will print out all the numbers in the range 0 - 10.
for (let i = 0; i <= 10; i++){
    //console.log(i)
};
//Write code that will print out all the numbers in the range 500 - 50.
for (let i = 500; i >= 50; i--){
    //console.log(i)
};

//Print out the odd numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to the odd number that says: "is an odd number".
//for (let i = 1; i <= 100; i++){
 //   if (i % 2 !== 0) {
        //console.log(`${i} is an odd number`)
 //   }
//};
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
//for (let i = 0; i <= 100; i++){
 //   if (i % 5 === 0) {
        //console.log(`I found a ${i}. High five!`)
  //  } if (i % 3 === 0) {
        //console.log(`I found a ${i}. Three is a crowd`)
//    }
//};

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.
let bank_account = 0
for (let i = 1; i <= 100; i++) {
    bank_account += i * 2
}
console.log(bank_account)


