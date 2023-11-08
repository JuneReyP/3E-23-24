//document.getElementById("sample").innerHTML = "sample content";

//single line comment
/* 
this is multiline comment
sdf
fsd
sdfds
sdfdsf
*/

/*
var
let
const
*/
var a = 2;
var b = 5;
var b = 4;

var c = a + b;
let d = 12;
d = c;

const e = "text";
// alert(d);
/*
Types of JavaScript Operators
There are different types of JavaScript operators:

    Arithmetic Operators
        Operator 	Description
        + 	        Addition
        - 	        Subtraction
        * 	        Multiplication
        ** 	        Exponentiation (ES2016)
        / 	        Division
        % 	        Modulus (Division Remainder)
        ++ 	        Increment
        -- 	        Decrement
    Assignment Operators
        Operator 	Example 	Same As
        = 	        x = y 	    x = y
        += 	        x += y  	x = x + y
        -= 	        x -= y 	    x = x - y
        *= 	        x *= y 	    x = x * y
        /= 	        x /= y 	    x = x / y
        %= 	        x %= y 	    x = x % y
        **= 	    x **= y 	x = x ** y
    Comparison Operators
        Operator 	Description
        == 	        equal to        (1 == '1')
        === 	    equal value and equal type (1 === '1')
        != 	        not equal   (1 != '1')
        !== 	    not equal value and not equal type   (1 !== '1')
        > 	        greater than
        < 	        less than
        >= 	        greater than or equal to
        <= 	        less than or equal to
        ? 	        ternary operator
    Logical Operators
        Operator 	Description
        && 	        logical and   ( 1 == '1')T && (1 === '1')F == F
        || 	        logical or
        ! 	        logical not
    Ternary Operators
        ?
        (condition) ? ifTrue : ifFalse;
*/
// function without parameter
function myFunc() {
  let getID = document.getElementById("sample");
  getID.style.backgroundColor = "red";
  getID.style.border = "1px solid blue";
  getID.style.color = "orange";
}

// myFunc();
// with parameter
function sumOf(num1, num2) {
  let ans = parseInt(num1) + parseInt(num2);
  document.getElementById("answer").innerHTML = ans;
}
function simple() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  sumOf(parseInt(num1), parseInt(num2));
}

/**
 * Conditional statements
if statement
if else statement
if else-if else
switch case
for loop
while loop
 */

//array
// let myArr = ["Apple", "orange", "banana"];
// document.write(myArr[0] + "<br>");
// document.write(myArr[1] + "<br>");
// document.write(myArr[2] + "<br>");

/**
 if(condition){
    //code executed if the condition is true
 }
 */

//  let grade = 89;
//  if(grade > 90){
//     alert("Your mark is A+")
//  }

/**
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
 */

// let grade = 89;
// if(grade > 90){
//    alert("Your mark is A+");
// //    if(){

// //    }
// }else{
//     alert("Your mark is below 90");
// }

/**
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
 */

// let grade = 99;
// if (grade >= 90) {
//   if (grade > 100) {
//     alert("You scored above 100 marks, that's impossible!");
//   } else {
//     alert("Your mark is A+");
//   }
// } else if (grade < 90 && grade >= 80) {
//   alert("Your mark is B");
// } else if (grade >= 75) {
//   alert("Your mark is C");
// } else {
//   alert("You Failed!");
// }

/**
switch(x) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 */
// let num1 = 3;
// let num2 = 4;
// let expression = "+";
// switch(expression) {
//     case '+':
//       alert(num1 + num2);
//     //   break;
//     case '*':
//         alert(num1 * num2);
//     //   break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '/':
//         alert(num1 / num2);
//         break;
//     default:
//         alert('Invalid operator');
//         break;
// }

/**
for (initializer; condition; iterator) {
  // code block to be executed if condition is true
}
 */

let myArr = ["Apple", "orange", "banana", "grapes", "Guava"];
// alert(myArr[3])

for(let a = 0; a > 5; a++){
    document.write(myArr[a] + "<br>");
}