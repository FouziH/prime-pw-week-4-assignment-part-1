console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {

//returning a template literal that says Hello, name!
  return `Hello, ${name}!`;
}
// Remember to call the function to test

//assigning greetName to helloName ("Jo")
const greetName = helloName("Jo");

//loging greetName to console
console.log(greetName); // output should be "Hello, Jo!"


// 3. Function to add two numbers together & return the result
//added a second paramter to the function called secondNumber
function addNumbers( firstNumber,  secondNumber  ) {
 //created a varaible called total and set it equal to first parmater  plus the second paramter
  let total = firstNumber + secondNumber;
  //returning total
  return total;

}
//declared total variable and set equal to addNumbers and passed 5 and 4 as an argument
const total = addNumbers(5, 4);

//login total to console
console.log(total); //output should 9

// 4. Function to multiply three numbers & return the result
//This function will take 3 parameters
function multiplyThree( num1, num2, num3){
// Declared result and set it equal num1 multplied by num2 multiplied by num3
let result = num1 * num2 * num3;

//returning/shipping result
return result;
}

//loging multiplyThree function to console and passing three argument in the form of numbers
console.log(multiplyThree(4,6, 8)); //output 192

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
   if ( number > 0 ) {
     return true;
   }
   return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {

//Using for loop that would loop through the
  for(let i = 0; i < array.length; i++){
    //returning
    return array[array.length -1];
  }
  return array;

}

let array = ["Ice cream", "cheese cake", "smoothie vegan shake"];

console.log("The last item  of the array is:", getLast(array));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){

  for ( let i = 0; i < array.length; i++ ){
    if ( value  === array[i] ) {

      return true;
    }
  }
    return false;
}
let value;
console.log(find(value, array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 for ( let item of string ){
   if(letter === item){
     return true;
   }
 }
 return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array) {
  let sum = 0;
  for ( let i =0; i < array.length; i++ ){
    // TODO: loop to add items
    sum += array[i];
  }// end of for loop
  return sum;
}//end of sumAll

let sumArray = [ -5, -8, 0, -8, -1 ];

console.log ( sumAll ( sumArray ) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray (array){
  let posArr = array.filter( index => index > 0 );
  return posArr;
}

//login and testing if the function return postive array or empty based on the sumArrayarray input
console.log(positiveArray( sumArray )); // output is []

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Question from codewars

// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
//
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

const numbers = function(busStops){
let currentPplOnTheBus = 0;
  for ( let i = 0; i < busStops.length; i++ ) {
    let currentStop = busStops[i];
    let gotOn = currentStop[0]
    let gotOff = currentStop[1];

    currentPplOnTheBus += gotOn;
    currentPplOnTheBus -= gotOff;
  }

  return currentPplOnTheBus;
};

// Testing the above function to see if its working
let number = [[10,0],[3,5],[5,8]];

console.log(numbers(number));

number = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];

console.log(numbers(number));

number = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

console.log(numbers(number));
