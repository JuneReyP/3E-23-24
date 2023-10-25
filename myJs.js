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
function myFunc(){
    let getID = document.getElementById('sample');
    getID.style.backgroundColor = 'red';
    getID.style.border = "1px solid blue";
    getID.style.color = "orange";
}

// myFunc();
// with parameter
function sumOf(num1, num2){
    let ans = parseInt(num1) + parseInt(num2);
    document.getElementById('answer').innerHTML = ans;
}
function simple(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    sumOf(parseInt(num1), parseInt(num2));
}
