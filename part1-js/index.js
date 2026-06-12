// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.
const century = 100;
let ffp = 45;
// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.

console.log(century + ffp);

// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
//
// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer: let declares a variable that CAN be manipulated and changed overtime or as needed
//                  const declares a variable that CANNOT be manipulated or changed, its meant to stay the same hence the const coming from constant

ffp = 54;
// century = 200; commented out because produces error on console in F12 menu of chrome
console.log(ffp);
console.log(century);

// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer: It is a modulo operator, so it will return the REMAINDER of the division between 2 variables / number

if( 47 % 2 === 0){
  console.log("even")
}
else{
  console.log("odd")
}

// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).

console.log(rawInput.trim()); //there are 2 other trim variants for front and for end but this one does both

// B2.
// Log the string converted to all lowercase.

console.log(rawInput.toLowerCase()); //this makes all characters lowercase

// B3.
// Log the number of characters in rawInput (including spaces).

console.log(rawInput.length);

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.

// const wrd = "awesome"
// console.log("<<<<<<<<",rawInput.match(wrd) === true);
// Tried this ^ after attemping the below code, not sure but still returned false

console.log(rawInput.toLocaleLowerCase().includes(( "awesome"))); 
// ====== COMMENTS ======

// to make it work I used .toLocaleLowerCase
//returning false probably cause its looking for lowercase awesome instead of just the word awesome
//  to make it return true i conerted rawInput to lowercase, not sure if thats what we are supposed to do 
// one way to think about it is, if the question is asking just for the word itself and doesnt care about lower or upper case
// then to find the word itself it makes sense to make the whole string either upper or lower to find the exact word 
//the user is looking for

//maybe theres a better method to use or a way to compute this manually but this works for now unless its wrong
//then ill change it to manual


// B5.
// Log the first 10 characters of rawInput.

let tempstr = ""; // probably could do without this but heavily unsure how to do it so that the log can 
                  // produce one neat string

for (let i = 0; i < 10 ; i++){
  tempstr += rawInput.at(i)     // as mentioned above, if i put the console.log(i) it would just repeat the log 
}                               // and look messy and all verticle seperate strings instead of 1 string having the 10 characters

console.log(tempstr);

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: takes a value and splits it into more values, so string -> multiple strings
//                the way it splits is based on the argument, if you use "" with strings then each char is arrayed
//                but if you use " " (has a space) then it will array each word as its own string
// console.log(rawInput.trim().split()); this would return the full string (with not start & end spaces) in an array
console.log(rawInput.trim().split(" "));

// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.

console.log(scores[0]);
console.log(scores.findLast(Number)); 
// we use findLast() to find the last element of an array. 
// inside the () we put Numbers since thats the element we are searching for
// becuase the array is made up of numbers

// C2.
// Log the total number of scores we see in the array.

console.log(scores.length); 

// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.

// console.log(scores.concat(new Array([78]))); tried this one but instead of the number it put the array containing the number
scores.push(78);
console.log(scores);

// C4.
// Use a method to log the index of the score 95.
// Log the index.

console.log(scores.indexOf(95));

// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.

console.log(scores.includes(50)); //returns false

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.

// Did this first by accident before seeing C7
// scores.forEach((Number)=>
//   {
//     console.log(Number)
//   }
// );

for (let i = 0 ; i < scores.length ; i++){
  console.log((scores[i]));
}

// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
//  For loop and For each , for loop feels more like a function, more code needed but more beginner friendly to understand in my opinion
//  for each feels like a method, but loop under an argument but forEach needs less code to do the same thing
// Im not too sure but since the argument in forEach can probably be played around with, since its element index and something else i forget
// but maybe theres more advanced use cases of forEach compared to the for loop, but at my knowledge right now they feel the same just forEach is smaller in terms of words
// like going from "Whats up" to "wassup"

scores.forEach((Number)=>
  {
    console.log(Number)
  }
);

// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
function bignum(num){
  return num > 80;
}
console.log(scores.filter(bignum));

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer: 
//          .filter will return an array that cuts off other elements (literally filter definition) so the length maybe shorter than original
//          .map will return the length of the original array with updated elements or values.
//          both change the values , map keeps lenght, filter can change ALL - values and length 

function twoX (num) {
  return num * 2;
};

console.log(scores.map(twoX));

// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.

console.log(student.name);  //for dot notaion you do not need quotes
console.log(student["city"]); //for bracket notation you need quotes or else will be treated as variable

// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.

// not suure how to do this, had to look online for how to add a new key.
// going to put the code so that the rest of part D works fine, but just for clarification
// i did not know how to do this on my own, now i do though

student.grade = "B+";
console.log(student["grade"]);

// D3.
// Use a method to log all of the keys in the object.


console.log(Object.keys(student)); //make sure the O is uppercase!

// D4.
// Use a method to log all of the values in the object.

console.log(Object.values(student));

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
// went to the w3 school site to see what a for..in loop is, cause I did not know what it was, not sure if i did it right, was confusing but i think i worked it out

for (let keys in student ){
    console.log(keys + ": " + student[keys])
}

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer:
//          for dot notaion you do not need quotes, you are calling on the key? of the array for its value
//          for bracket notation you need quotes or else they key? you want will be treated as variable 
//          
//          
//          for the example, I honestly could not give one, I do not know why. --- I looked it up and asked chatGPT to give me some reasons as to choose one over the other
//          and i understand more that dot notaion is limited in its use when referring to a key that either has a special name like "key name" with a space or if the key name is a number,  
//          or a variable that is assigned the string value same to the key - dot notation CANNOT call on that variable to reference the key, but bracket notation can since
//          in bracket notation you need to use "" quotes to reference the key and the variable holding a string value same to the key is essentially that so if you did 
//          bracket notation on the variable it would work due to the nature of the variable's value being a string which has the same letters as the key
//
//          TLDR : Bracket Notation for unusualy key names such : "string name" , number name, variable name or just unusual name
//                 Dot Notation if the name is simple and known like the ones in this Object for this part D question
//                 The paragraph above is more so for me to just explain it to myself while I was writing it down so I understand
// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",  grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

// E1.
// Log the name of the third student.

console.log(roster[2].name)

// E2.
// Using forEach, log the name of every student who is present.

roster.forEach((x)=>
  {
        console.log(x["name"])
  }
);

// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.

function psGr (obj) {

// take in the object
// focus on the grade key
// compare the value of that grade key
// return true if its greater than 70

  // return obj["grade"] > 70;
  
  // for (let keys in obj )
  //   {                                                  this was my second attempt at printing out the name and score 
  //   if(keys === "name" || keys === "grade" )
  //     console.log(keys + ": " + student[keys])
  //   }

  
  return obj["grade"] >= 70;


  // below is my initial attempt to printing out name and grade i had to undo the whole program (ctrl+z) alot so most of the commented out button code is missing alot

  // obj.forEach((key)=>
  //   {
  //       if (key !== "name" || key !== "grade")
  //         {
  //          
  //         }
  //       else
  //         {
  //           console.log(obj)
  //         }
  //   }
  // );

}

function print(arr) {

  for (let i = 0 ; i < arr.length ; i++){

    console.log(arr[i]["name"] + ": " + arr[i]["grade"] )

  }

}

console.log(print(roster.filter(psGr))) // PS** the console log attatched to this is not needed and will return undefined
//This genuinly took me so long to figure out, theres probably a super easy way to do this but without looking online except for the website w3 given to us, it was hard
//i know i have to filter the array. the problem is the array has object, i could filter it easily by grade within the objects getting a new area, but to also print the name
// and the grade of the new array was hard for me to figure out how to do all in 1 function. So i ended up just doing 2 functions if thats ok or even right
// PS** = after asking AI and online
// PS**     I now see that I couldve made it more clean by doing .filter on the array and storing that new array as a variable. 
// PS**     Then running .forEach() on that new array variable to print out the students. 
// PS**     ChatGPT (i know not the best to ask) did say that it is possible to do in one .filter() [function, statemennt?], but that it would be messy? Like giving the
// PS**     .filter() more jobs than it needs, so the 2 part approach is more clean and job-management efficient would like to hear your thoughts on this though 
 

// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.

console.log(roster.map((obj)=>
  {
    return obj["name"];
  }
))



// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer:  I think storing objects in an array is like putting folder documents that hold alot of information into a file container
// its easier to organize and store i assume. If you have a bunch of students and you need to put all their info into an object then you have a bunch of objects just exisiting
// its easier to store all those objects holding student data into an array that can always be called upon later and you will know exactly where the object for the student is
// having 1000 students means 1000 objects holding student data, but 1 array can hold them all. So now you can create a function to create objs which will then be store in an array
// then by using array methods and calling on the key of the object you can easily find and see or tweak student data. I assume thats how that works


// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")

// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"

function greet(name){
  return "Hello, " + name;
}

// F2.
// Write a function called square that takes a number and returns its square.
//

console.log(square(4))   // → 16
console.log(square(9))   // → 81
//

function square(num){
    return num * num;
}

// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: return is like serving a cooked dish, without the return. You only made the dish. No one to serve it to. Nobody gets anything
// so in a function return allows you to give the result of the function to whatever is calling the function, like when a customer orders (calls) food (calling the function)
// and then the chef cooks the food (function running) then the server brings the food to the customer (the "return" portion of the function)
// without the return the function just holds the result until it stops exisiting so basically nothing. To my knowledge atleast.


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true

function isEven(num){
  return num % 2 === 0;
}

// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//
console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0

function sum(arr){
  total = 0;
//  for (let i=0 ; i < arr.length ; i++){       this works just wanted to see if i could try it with forEach
//     total += arr[i]
//  }
  arr.forEach((num)=>{
    total += num;
  });
 return total;
}


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
myForEach(  [1, 2, 3],  function(n)  //this is the callback function, its just that they are defining it within the argument for the myForEach function
                        {
                            console.log(n)
                        }
)
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer:

function myForEach(arr, callback){
    for (let i = 0 ; i < arr.length ; i++){
      callback(arr[i]);
    }
}

// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//
console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]

function myMap(arr, callback){
  let tempArr = [];
  for (let i = 0 ; i < arr.length ; i++){
      tempArr[i] = callback(arr[i]);
  }
  return tempArr;
}

// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: they each represent the method .map .filter respectively.
// the key diffrence in what they return is a NEW array. 
// they dont return the original array becuase we are returning a new array. The function takes the values from the original array 
// then they use those values and manipulate them either change or disregard them and then create a new array out of the result the callback function was looking for. 

function myFilter(arr, callback){
  let tempArr = [];
  for (let i = 0 ; i < arr.length ; i++){
      if(callback(arr[i])){
        tempArr.push(arr[i]);  // had to use .push since unlike map where map keeps the same length of the array,
      }                        //  filter doesnt so i couldnt do tempArr[i] becuase it would keep the same length and make the array look ugly on the console
  }
  return tempArr;
}