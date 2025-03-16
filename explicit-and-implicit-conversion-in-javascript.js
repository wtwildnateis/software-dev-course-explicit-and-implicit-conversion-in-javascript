/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);
// Fixed using Number("5"), ensures "5" is treated as a number instead of relying on implicit conversion.
let isValid = Boolean("");
if (isValid) {
    console.log("This is valid!");
} 
// Fixed using Boolean("") ensures that the string is converted to a boolean value, which is false, whereas Boolean("false") would be truthy.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);
// Fixed using Number(age), ensures "25" is treated as a number and not being concatenated as a string.

// Part 2: Write Your Own Examples
// Implicit type conversion example
let num = 5;
let str = "5";
let sum = num + str; // Implicit conversion of number to a string.
console.log(sum); // 55
console.log("Type of num before implicit conversion:", typeof num); // "number"
console.log("Type of str before implicit conversion:", typeof str); // "string"
console.log("Type of sum after implicit conversion:", typeof sum); // "string"
// The number 5 is implicitly converted to a string and concatenated with the string "5" to produce "55".

// Explicit type conversion example
let num2 = 5;
let str2 = "5";
let sum2 = num2 + Number(str2); // Explicitly converting the string "5" to a number.
console.log(sum2); // 10
console.log("Type of num2 before explicit conversion;", typeof num2); // "number"
console.log("Type of str2 before explicit conversion:", typeof str2); // "string"
console.log("Type of sum2 after explicit conversion:", typeof sum2); // "number"
// The string "5" is explicitly converted to a number using Number() and added to the number 5 to produce 10.

// Edge case example
let strValue = "Hello";
let edgeCase = Number(strValue); // Explicitly converting a string that cannot be converted to a number.
console.log(edgeCase); // NaN
console.log("Type of strValue before explicit conversion:", typeof strValue); // "string"
console.log("Type of edgeCase after explicit conversion:", typeof edgeCase); // "number"
// The string "Hello" cannot be converted to a number, resulting in NaN (Not a Number).