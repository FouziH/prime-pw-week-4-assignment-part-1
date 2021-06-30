console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log(hello())

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!` ;
}
// Remember to call the function to test
console.log(helloName("Stacy"))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let result = firstNumber + secondNumber;

  return result;
}

console.log(addNumbers(3, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree( ){
let result = 2 * 5 * 6;

return result;
}

console.log(multiplyThree())


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

console.log(isPositive(5))
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let array = []
function getLast( array ) {
 if ( array && array.length > 0 ){
   return array[ array.length -1 ]
 }// end
 else {
   return undefined;
 }// end
}  // end getLast

//loging the getLast function and passing the empty array I created above
console.log(getLast(array))
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){

  for ( let i =0; i < array.length; i++ ){

    if(value === array[i]){
      return true;
    }
  }
    return false;
}

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

let sumArray = [1, 2, 3, 5, 10];

console.log ( sumAll ( sumArray ) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Write a function that accepts an array of 10 integers (between 0 and 9),
//that returns a string of those numbers in the form of a phone number.
//Example
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

//solution 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0,3) + ')' + numbers.substring(3, 6) + '-' + numbers.substring(6);
}
//Solution 2
function createPhoneNumbers(numbers){
  let phoneNumber = "(xxx) xxx-xxxx";

  for ( let i = 0; i < numbers.length; i++ ){
    phoneNumber = phoneNumber.replace("x", numbers[i])
    }
      return phoneNumber;
  }

//output from createPhoneNumber fucntion (solution 1);
console.log(createPhoneNumber(numbers));

//output from createPhoneNumbers function (solution 2)
console.log(createPhoneNumbers(numbers))
