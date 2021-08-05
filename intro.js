//console.log('Hello World');

let number = 0;

// while (number < 10) {
    
//     console.log(number)
//     number += 1

// }

const array = ['missy', 'klondike', ''];

//console.log(array[2])

array[2] = 'star';

array.unshift('aspen')

//console.log(array)

const numArray = [1, 2, 3, 5]

//console.log(numArray.length);

// numArray.push(5);
// console.log(numArray);
// console.log(numArray.length)

// numArray.unshift(1);
// console.log('Just added 1 to the beginning');
// console.log(numArray);
// console.log(numArray.length);

// const survivor = ['loser', 'winner', 'loser'];

// survivor.pop()
// console.log('popped loser: ', survivor);

// survivor.shift()
// console.log('removed loser:', survivor);

// 3
// const getTheGoodGuys = ['batman', 'joker', 'iceman', 'ivy', 'robin'];
// getTheGoodGuys.splice(1, 3);

//console.log(getTheGoodGuys);
// 

const pokemon = ["Pikachu", "Mew", "Snorlax"]

// Catch them all with a for of loop

// for (element of pokemon){
//     console.log(`I have caught the ${element}`)
// }
//Comma missing original array
// const arr = [1,2,[3,4,[5,6]],[7,8]]
// console.log(arr[2][0]);
// console.log(arr[2][2][1]);
// console.log(arr[3][1]);

// 
// const slicArr = [2, 3, 3, 3, 4];
// const justThrees = slicArr.slice(1, 4);
// console.log(justThrees);

// const arrIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// console.log(arrIndex.indexOf(7));

// const stringArr = 'Hello World';
// console.log(stringArr.split(''));

const joinArr = ["s", "u", "c", "c", "e", "s"];
//console.log(joinArr.join(''));
//Combine arrays option 1
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 5];
// console.log(arr1.concat(arr2));
//Combine arrays option 2
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 5];
// const arr3 = [...arr1,...arr2]
// console.log(arr3)
//new Set removes duplicates
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Set([3, 4, 5, 5]);
// console.log(...arr1, ...arr2);
// //combine obj
// const obj1 = {
//     one: 1, two: 2, three: 3
// };
// const obj2 = {
//     three: 3, four: 4, five: 5
// };
// const obj3 = {
//     ...obj1,...obj2
// }

// console.log(obj3)

// const buyAPony = (name) => {
//     return {
//         name,
//         ride: () => console.log("You are riding a pony named " + name)
//     }
// }

// const myPony = buyAPony("Lightning")
// console.log(myPony)
// myPony.ride()