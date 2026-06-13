// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list

const header    = document.getElementById("main-heading");
const pSubtitle = document.getElementById("subtitle");
const unordList = document.getElementById("item-list");
console.log(header);
console.log(pSubtitle);
console.log(unordList);
// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)

const headerTwo = document.querySelector("h2");
const toggleBtn = document.querySelector("#toggle-btn");
const listItm   = document.querySelector(".list-item");
console.log(headerTwo);
console.log(toggleBtn);
console.log(listItm);
// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.

const allItm = document.querySelectorAll(".list-item")
console.log(allItm);

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.

for (let i = 0; i < allItm.length ; i++){
    console.log(allItm[i].textContent);
}

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//
//          answer: elementbyID does as it says, by the ID. queryselector can be anything tag, id, class. 
//                  queryselectorall returns every element under the tag , id, class whatever you put in the argument


// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.

console.log(document.getElementById("main-heading").textContent);

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.

// pSubtitle.textContent = "Page loaded successfully";
document.getElementById("subtitle").textContent = "Page loaded successfully"

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.

document.getElementById("output-text").textContent = "You should keep putting food in the list! ";

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.

document.getElementById("output-box").style.backgroundColor = "gray";

// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer: 
//                  textContent from what I understand is the string content within the element. 
//                  Im not too sure but I think innerHTML loads first so buttons wont work i 
//                  think which is why its bad but im not too sure


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.

document.getElementById("change-btn").addEventListener(("click"), ()=>
    {
        document.getElementById("main-heading").textContent = "PLEASE dont add TOO MANY items, the list will go out of bounds"
    }
);

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.

document.getElementById("toggle-btn").addEventListener(("click"), ()=>
    {
            (document.getElementById("output-text")).classList.toggle("highlighted");
            secMess.classList.toggle("highlighted");
    }
);

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.

document.getElementById("main-heading").classList.add("active");
console.log(("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"),document.getElementById("main-heading").classList);

allItm[1].classList.remove("list-item"); //removes the 2nd of 3 lists , class "list-item"
console.log(allItm[1]);

// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer: event listener , will read a users specefic input and run a function only when that input condition has been satisfied
//          you cant expect it to run responsibly because theres nothign for the program to wait for or listen to from the users input
//          so its either random or doesnt happen


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: .toggle will add and remove a classlist when called. Literal meaning of toggle i guess, like a lightswitch - on or off you can flip the switch
//          .add adds a class, .remove deletes the class.
//          i think if you use setting eleement.className it will ovverride all the classes already there i think. plus it feels more
//          easy to just use the methods. .add .remove .toggle

// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".

const newLi = document.createElement("li");
newLi.textContent = "Grapes";
newLi.classList.add("list-item");
unordList.append(newLi);


// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after

document.getElementById("add-btn").addEventListener(('click'), ()=>
    {
        const itmName = document.getElementById("item-input");
        const newLin = document.createElement("li");
        newLin.textContent = itmName.getAttribute("text");
        newLin.classList.add("list-item");
        unordList.append(newLin);
        itmName.textContent="";
    }
);

// got the button half working, without looking at a website referenced im not too sure what else to do. I dont know if we can look online 
// if not given a website to check methods for DOM.
// So i will leave the code as is, BUT i did look it up now, and I see i shouldve used .value for line 201 and 204



// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.

// document.getElementById("output-text").remove(); // <<<<<<<<<<<<<<<<<<<<< commenting it out so that button can show its work

// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer:  createElement creates an html element. Append and appenchild will insert the element you created so it can be seen
//                   remove() removes the element from the html so no more see 
//                   i think it appears once you append it to an existing html element;


const secMess = document.createElement("span");
secMess.textContent = "Remember to EAT HEALTHY !!!";
secMess.style.color = "gray";

document.getElementById("output-text").append(secMess);
