/*Storing Values with assignment operator*/

var a; // var keyword can be used through the program
var b = 2;
console.log(a) //

a = 7

b = a

console.log(a)

/* Initializing Variable w/ Assignment Opeator*/
var a = 3;
var b = 6;
var c = 5;

var add  = a + b;
console.log("adding a + b = " + add)


/* remainder operator*/
var remainder;
remainder = 11 % 3;
console.log("remainder " + remainder)
/*Compound assignment
with augmented addition */

var a = 3;
var b = 6;
var c = 7;
var d = 9;
a += 12;
console.log("Compounding assignment with addition = " + a)


b -= 5;
console.log("compounding assignment with subtraction = " + b)

c *= 5;
console.log("compounding  assignment with multipication = " + c)



d /= 3;
console.log("compounding assignment with division = " + d);


/*Escaping literal quotes in Strings */
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
// we can use single quotes instead of double quotes
// and not using escape literals


/* Concatenating Strings
with plus equals operator */

var ourStr = "I come first.";
ourStr += "I come second";
console.log("Concatenating Strings with plus equals operator " + ourStr);

/*Appending variables to string */
var someAdjective = "worthwhile";
var someStr = "Learning to code is ";
someStr += someAdjective;
console.log(someStr);

/*Finding the length of a string */
var lastNameLength = 0;
var lastName = "SrujanSai";
lastNameLength = lastName.length;
console.log("The length of the string is " + lastNameLength);


/*Bracket Notation to find
First Character in String */

var firstLetterOfLastName = "";
var LastName = "Dark Lord";
firstLetterOfLastName = LastName[0];
console.log("What is the first letter in a name = " + firstLetterOfLastName);

/*String Immutability */


var samString = "Jello World!";
//samString[0] = "H"; // this cant be changed to "H" cause of immulability
//samString = "Hello World";
samString = "Hello World!!"
console.log(samString);


/*Bracket Notation to find
Nth Character in String */

var firstName = "Srujan"
var lastLetter = firstName[firstName.length - 1];
console.log("LastLetter of my name is " + lastLetter);



/*WORD BLANKS */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result += "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result


}

var output = wordBlanks("dog", "big", "ran", "quickly");
console.log(output);



/*Store Multiple Values with Arrays */

var ourArray = ["John", 23]
// array size can be increased with adding a
// comma(,) to the next element


/*Nested Arrays */
var myArray = [["universe", 32], ["end", 8987]];
console.log(myArray);


/*Access Array data with indexes */
var myyArray = [87,57,98];
var myData = myyArray[0];
console.log(myData);

/*Modify Array data with indexes */

var arry = [65, 89, 69];
arry[0] = 99;
console.log("Updated array list = " + arry);

/*Access array data with multiple indexes */

var sampleArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myAray = sampleArray[0][0]; // to get 1
var myAray1 = sampleArray[1][2]; // to get 6
var myAray2 = sampleArray[3][0][1];
console.log(myAray);
console.log(myAray1);
console.log(myAray2);


/*Manipulate Arrays with push()  and Pop()*/

var someArray = ["homer simpson", 33];
someArray.push(["bart simpson", 13]); // to append an array to the list
console.log(someArray);
someArray.pop() // to remove the last element'(s) from the list
console.log(someArray);

/*Manipulate Arrays with shift() and Unshift() */

var value = [["Jon snow", "king"], ["sansa stark", "queen"]];
value.shift(); // remove the first element in an array
console.log(value);
value.unshift(["Bran the broken", "New king in the north"]);
// unshift() add at the beginning of the function
console.log(value + " using the unshift fuction");

/*Write reuable code with functions */
function ourResuableFunction(){
    console.log("heyya world");
}

ourResuableFunction(); // calling the function

/*Passing values to
Functions with arguments */

function funcWithArgs(a, b){ //the values which are in brackets are arguments
    console.log(a + b)
}
funcWithArgs(14, 4)

/*global scope and functions */

var myGlobal = 100; // this variable can be accessed anywhere

function func(){
    oopsGlobal = 5; // here no var keyword is used CAUTION!
}

function func2(){
    var out = "";
    if (typeof myGlobal != "undefined") {
        out += "myGlobal " + " " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined\n"){
        out += "oopsGlobal " + oopsGlobal; 
    }
    console.log(out);
}

func()
func2()

/*Local Scope and Functions */
function myLocalSccope(){
    var myVar = 4;
    console.log(myVar)
}

myLocalSccope(); // this returns 4
//console.log(myVar); // myVar can't access 4 because it is out of scope

/*GLOBAL vs LOCAL
SCOPE in FUNCTIONS */

var outerWear = "T-shirt" // this is global variable

function myOutFit(){
    return outerWear // this can access T-Shirt because its global
}
console.log(myOutFit()); 

var outerWear = "T-shirt" // this is global variable

function myOutFit(){
    var outerWear = "sweater";
    return outerWear // this can't access T-Shirt the inner
                    // inner outerWear precidence over global variable
}
console.log(myOutFit()); 


/*UNDERSTANDING UNDEFINED VALUE
RETURNED FROM A FUNCTION */

var sum = 0;
function addThree(){
    sum += 4
}
console.log(addThree()); // the result is undefined cause it has nothing to return
