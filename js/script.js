/*
//STEP 1
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction
//STEP 2
33  //numeric literal expression
"Wazzup" //string literal expression
true  //Boolean literal expression
null //null literal expression

//STEP 3
two examples of complex / variable expressions

let example = 100 / (numOne * 3) + 100;
let anExpression = 3 * (4 / 5) + 6;

//STEP 4
Declare (but do not assign) 9 variables for the following identifiers: 
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let contactYou;

 //STEP 5
 Take the 3 of the 9 variables that you created above 
 and demonstrate 3 ways for declaring and assigning 
 values to those variables

let firstName;
firstName = "Jennifer";

let contactYou; 
contactYou = true;

let referralSource = "web", let contactYou = true;

 

 //STEP 6
 Create a variable. Add a number and a string and 
 display the coerced result in the browser’s console window. 

 let mentalAge = 3;
 console.log ("Your mental age is " + (mentalAge + 87) + " years old.");

 //STEP 7
 Create two variables. For the first variable, add a Boolean and a string
 and display the coerced result. For the second variable, 
 add a number and a Boolean and display the coerced result. 

 let statusValid = true;
 let secondOne = 3;
 document.write(statusValid + " rhymes with blue");
 console.log(secondOne + false + 2);
 
 
 //STEP 8
 Is the following string literal valid? If not, how would you fix it?
 //The string literal was invalid because of the use of mixed single and double quotations throughout. 
 I fixed it by enclosing the string using backticks, making it a template literal.

let someString = `Who once said, " Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.`;
console.log(someString);

 //STEP 9
 Create a variable that produces a null value in the console window.
 Then, create a variable that produces an undefined value in the console window.

 let imag = null;
 console.log(imag);

 let a;
 console.log(a);
 

 //STEP 10
Use the unary typeof operator on various literals to return the following types
 within the console window: string, number, Boolean, object, and undefined.
 
console.log(typeof "Hola");
console.log(typeof 8);
console.log(typeof false);
console.log(typeof null);
console.log(typeof hippo);

 //STEP 11
 Within an alert box, use the concatenation operator (+) to display text in the 
 alert box that appears as follows: Hello Zak Ruvalcaba, welcome to the JavaScript class!
 Substitute my name for your name. Although not necessary in practice, 
 I want you to use 2 concatenation operators to construct this string of text. 
 One after the text “Hello” and a second one after your name and before the comma.

  
let nameJ = "Jennifer Kim"
let greet = ", welcome to the JavaScript class!"
alert("Hello " + nameJ + greet);

//STEP 12
Declare a variable called name and set it equal to your name.
Substitute your name in the previous alert string with the variable instead.

let name = "Jennifer Kim"
alert("Hello " + name + greet);

//STEP 13
    Declare a variable called course and set it equal to “JavaScript”. 
    Rework your alert string so that it displays the string of text but using the variables
    as opposed to hard coded text.


let name = "Jennifer Kim"
let course = "JavaScript";
alert("Hello " + name + ", welcome to the " + course +" class!");

//STEP 14
//Rework the above string so that a line break is added right before the word “Welcome”. 


let course = "JavaScript";
alert("Hello Jennifer Kim.\nWelcome to the " + course +" class!");
//STEP 15
Replace the hardcoded string of your name with a prompt that asks the user for their name. 
The prompt’s response will now be captured in the name variable. 

let yourName = prompt("What is your name?");
let course = "JavaScript";
alert ("Hello " + yourName +`. \nWelcome to the` + course +` class!`);
//STEP 16
Replace the hardcoded string of the class you are taking with a prompt that asks the user 
for the class they are taking. The prompt’s response will now be captured in the course variable.

let yourName = prompt("What is your name?");
let course = prompt("What class are you taking?");
alert ("Hello " + yourName +`. \nWelcome to the ` + course +` class!`);

//STEP 17
Declare a variable called x and assign it a value of 10. Declare a variable called y 
and assign it a value of 20. Display the sum of those two numbers in the console window. 

let x = 10;
let y = 20;
console.log(x + y);
//STEP 18
Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable 
and display the result in the console window.The result should be 40.

let x =20;
console.log( x + 20);
//STEP 19
Declare a variable called x and assign it a value of 20.Multiply and assign 5 to that variable
and display the result in the console window. The result should be 100.

let x = 20;
console.log( x * 5);
//STEP 20
Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
Divide and assign 1 to that variable and display the result in the console window. 
The result should be 2. If you got 6.66 try again.

let x = 2;
console.log(x/1);

// STEP 21
Using a set of Comparison and Logical operators, write an application that evaluates 
to true and displays the result within the console window.

let j = 10;
let k = 10;
console.log(j==k);

//STEP 22
//Using a set of Comparison and Logical operators, write an application that evaluates 
//to false and displays the result within the console window. 

let g = "ghjk";
let h = "hjkl";
console.log(g===h);
*/