//Calculate the Cube
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    return Math.pow(num, 3);
}

console.log(calculateCube(5));
//=> 125
// started with return num * num * num 
//refactored using the Math.pow() function


//Is a Vowel?
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = (letter) => {
    letter = letter.toLowerCase()
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    } else {
        return false;
 }

};

console.log(isAVowel("A"));
//=> true


//Get Two Lengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (string1, string2) => {
    howLong = [];
    howLong.push(string1.length, string2.length)
    return howLong;
    
};

console.log(getTwoLengths("Hank", "Hippopopalous"));
//=> [4, 13]


//Get Multiple Lengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (array) => {
    howLongIsEachElement = [];
    for (i = 0; i < array.length; i++){
        howLongIsEachElement.push(array[i].length)
    };
    return howLongIsEachElement;


}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//=> [5, 4, 2, 2, 4]

//Maximum of Three Numbers
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = (num1, num2, num3) => {
    let mathMax = Math.max(num1, num2, num3);
    return mathMax;
    
};
console.log(maxOfThree(6, 9, 1));
//=> 9

