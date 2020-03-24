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

/*USING CONDITION LOGIC
WITH IF STATEMENTS */

function trueOrFlase(wasThatTrue){
    if(wasThatTrue) {
        return "yes! that was true";
    }

    return "No, that was false";

}

console.log(trueOrFlase(false));

 /*COMPARISON WITH THE 
 EQUALITY OPEARATOR */

 function testEquak(val) {
     if (val == 32) {
         return "The value is correct";
     }
     return "Not the correct value";
 }

 console.log(testEquak(32));

 /*STRICT EQUALITY OPERATORS */

 32 === 32; // checks only value  in this case it is equal 
 32 === '32' // checks both type and value

 /*PRACTICE COMPARING DIFFERENT VALUES */

  function comparaisionEquality(a, b) {
      if (a ===b) {
          return "equal"
      }
      return "Not equal"
  }

  console.log(comparaisionEquality(10, "10"));

  /*INEQUALITY OPERARATOR */

  function inequaityOperator(a,b){
      if (a != b){
          return "yep!, they are unequal"
      }
      return "equal"
  }

console.log(inequaityOperator(5, 6));

/*COMPARISON WITH THE STRICT INEQUALITY OPERATOR */

function testStrictNotEqual(val){
    if (val !== 12){
        return "Not equal";
    }
    return "equal";
}

console.log(testStrictNotEqual('12'));

/*COMPARISON OPERATORS */

function testLessOrEqual(val) {
    if(val <= 3){
        return "smaller than 3";
    }
    if(val <= 24) {
        return "smaller than 24";
    }

    return "More than 24";
}

console.log(testLessOrEqual(5));

/*COMPARISONS WITH THE LOGICAL 'AND(&&)' or OR(||) OPERATOR */

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "True";
    }
    return "False";
}

console.log(testLogicalAnd(32));


/*LOGICAL ORDER IN IF ELSE STATEMENTS */

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10"
    }
}

console.log(orderMyLogic(3));

function ifelse(valle){

    if (valle < 5) {
        return "tiny";
    } else if (valle < 10) {
        return "Small";
    } else if (valle < 15) {
        return "Medium";
    } else if (valle < 20) {
        return "Large";
    } else if (valle >= 20) {
        return "Huge";
    }

}

console.log(ifelse(4));

/*GOLF CODE */

var names = ["Hole-in_One!", "Eagle", "Birdie", "par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
   
   if (strokes == 1){
       return names[0];
   } else if (strokes <= par - 2) {
       return names[1];
   } else if (strokes == par -1) {
       return names[2];
   } else if (strokes == par) {
       return names[3];
   } else if (strokes == par + 1) {
       return names[4];
   } else if (strokes == par + 2) {
       return names[5];
   } else if (strokes == par + 3) {
       return names[6];
   }
}

console.log(golfScore(5,4));

/*SWITCH STATEMENTS */

function caseInSwitch(valaue) {
    var answer = "";
    switch(valaue) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "greek alphabet upto delta";
}
return answer;
}

console.log(caseInSwitch(35));

/*MULTIPLE IDENTICAL OPTIONS
IN SWITCH STATEMENTS */

function sequentialSizes(num) {
    var answer = "";
    switch(num) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;  
    }
    return answer;
}
console.log(sequentialSizes(4));


/*RETURNING BOOLEAN VALUES FROM
FUNCTIONS */

function isLess(a, b){
    return a < b;
}

console.log(isLess(10,15));

/*RETURNING EARLY PATTERN 
FROM FUNCTIONS*/

function abTest(a,b) {
    if(a < 0 || b < 0) {
        return "undefined";
    }
}

console.log(abTest(-2,-3));


/*CARDS VALUES USING SWITCH AND CASE */

var count = 0;

function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "k":
        case "A":
            count--;
            break;

    }

    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

console.log(cc(2));

/*JAVASCRIPT OBJECTS */

var myDog = {
    "name": "scobby",
    "legs" : 4,
    "tail": 1,
    "friends": ["Shaggy", "velma", "Fred", "daphne"]
}

/*ACCESSING OBJECTS WITH DOT(.) NOTATION */
var dogName = myDog.name;
console.log(dogName);
var dogFriends = myDog.friends[0,2];
console.log(dogFriends);

/*ACCESSING OBJECT PROPERTIES WITH
BRACKET NOTATION */

//if object has a space in between it bracket notation works

var testObject  = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObject["an entree"];
console.log(entreeValue);

/*ACCESSING OBJECT PROPERTIES WITH VARIABLES */

var accVariable = {
    1: "donkey",
    2: "lion",
    3: "Monkey"
}

var checkVariable = 1
var animal = accVariable[checkVariable];
console.log(animal);

/*UPDATING OBJECT PROPERTIES */

myDog.name = "Scobby Doobey doo";
console.log(myDog.name);

/*DELETEING OBJECTS USING DELETE KEYWORD */

delete myDog.name;


/*USING OBJECTS FOR LOOKUPS */

function phoneticLookUp(vallee){
    var res = "";

    var looup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "easy"
    }

    res = looup[vallee];
    return res;
}

console.log(phoneticLookUp("alpha"));

/*TESTING OBJECTS FOR PROPERTIES */

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not found"
    }

}

console.log(checkObj("gift"));

/*MANIPULATING COMPLEX OBJECTS */

var myMusic = [
    {
        "artist": "Linkin Park",
        "title": "Hybrid Theory",
        "release_year": 2001,
        "formats": [
            "CD",
            "Record",
            "Digital"
        ],
        "Platinum": true
    },
    {
        "artist": "Imagine Dragons",
        "title": "Smokes and Mirrors",
        "release_year": 2014,
        "formats": [
            "CD",
            "Record",
            "Digital",
            "ipod"
        ],
        "Platinum": false
    }
];

/*ACCESSING NESTED OBJECTS */

var carObjects = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = carObjects.car.inside["glove box"];
console.log(gloveBoxContents);

/*ACCESSING NESTED ARRAYS */

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];

console.log(myPlants[1].list[1]);

/*RECORD COLLECTION */

var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"

    }
};

// keep a copy of collection for tests

var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);

function updateRecords(id, prop, vaalue) {

    if(vaalue === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(vaalue);
    } else {
        collection[id][prop] = vaalue;
    }

    return collection;
}

// alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));


/*ITERATE WITH WHILE LOOPS */

var myAarray = [];

var i = 0;
while(i < 5) {
    myAarray.push(i);
    i++;
}

console.log(myAarray);

/*ITERATE WITH FOR LOOPS */

var justAaray = [];

for(var i = 0; i < 5; i++){
    justAaray.push(i);
}

console.log(justAaray);

/*ITERATE ODD NUMBERS WITH A FOR LOOP */

var oddNumList = [];

for(var i = 1; i < 20; i += 2){
    oddNumList.push(i);
}

console.log(oddNumList);

/*COUNT BACKWARDS WITH A FOR LOOP */

var countBackwardsList = [];

for(var i = 10; i > 0; i--){
    countBackwardsList.push(i);
}

console.log(countBackwardsList);

/*ITERATE THROUGH AN ARRAY WITH A FOR LOOP */

var myArr = [2,4,5,6,7];
var total = 0;

for(var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

/*NESTED FOR LOOP */

function multiplyArr(arr) {
    var product = 1;

    for(i=0;i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }


    return product;

}

var product = multiplyArr([[1,2],[3,4],[5,6,7]]);
console.log(product);

/*ITERATE WITH DO... WHILE LOOPS */

var myAry = [];
var i = 10;

do {
    myAry.push(i);
    i++;
} while (i < 5)

console.log(i, myAry);


/*ACCESING OBJECTS IN THE LIST */

var contacts = [
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "01254585",
        "likes": ["magic", "hagrid", "hogwarts"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "020548788985",
        "likes": ["Intriguing Cases", "violin", "cigars"]
    }
];

function lookUp(name, prop){

    for(var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }

    return "No such contact"

}

var dataa = lookUp("Harry", "lastName");
console.log(dataa);


/*USE THE CONDITIONAL (TERNARY) OPERATOR */

// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;
}

console.log(checkEqual(1,3));

