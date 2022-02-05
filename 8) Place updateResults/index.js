"use strict";


/*

By now:
You should have a program that, when the user clicks on the button, creates
a CSS-grid of R rows and C columns and fills the grid with random numbers between 0 and 99.
The values of R and C come from the input fields.

When the user clicks on a number, that number becomes selected (if it were deselected) or 
deselected (if it were selected). In other words, by clicking on a number, the user toggles
the class "selected" for that number.

Also, you have a function updateResults that, when called, updates the results.

Now you need to place the call to that function updateResults in the right place in the code so
that the results are updated each time the user selects or deselects a number.


VIDEO:  Record a video where you explain where you have placed all the lines
        required to update the results, and why.
        This video must be called placementExplanation
 
*/


function getArrayOfSelectedNumbers (className) {

  // This weird line creates an array with all the numberDivs that have the 
  // class className. Naturally, when you call this function, you will need 
  // to assign a value to className. What value should that be, do you think?
  // The reference to the array is stored in arrayElements
  let arrayElements = Array.from(document.querySelectorAll("." + className));

  // Create a new array and store its reference in arrayNumbers
  let arrayNumbers = [];

  // Iterate through all the elements in arrayElements.
  // For each numberDiv in arrayElements create a new element in arrayNumbers
  // with the numeric value of the random number.
  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);
  }

  // Make the array of numbers available outside the function
  return arrayNumbers;

}

function gridMaker (gridContainer, R, C) { 
  gridContainer.innerHTML = "";  // Remove all child nodes (if any)
  gridContainer.style.display="grid";
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns =`repeat(${C}, 1fr)`;
  for (let i = 0; i < (R * C); i++){
    gridContainer.appendChild( createNumberDiv() ); 
  }  
}
 
document.querySelector("button").addEventListener("click", function(){
  gridMaker ( document.querySelector("#grid"),(document.querySelector("#inputRows").value) ,(document.querySelector("#inputCols").value) );
});

function createNumberDiv (){
  let elementRef = document.createElement ("div");
  elementRef.innerHTML = Math.floor(100 * Math.random());
   
  elementRef.addEventListener("click", function(){
    elementRef.classList.toggle("selected"); 
    updateResults("selected");
  });
  return elementRef;
}

function updateResults(className){
  let selectedArray = getArrayOfSelectedNumbers(className);

  // Display selected
  let elementref = document.querySelector("#selected");
  let element = elementref.getElementsByTagName("span");
  element[0].innerHTML = selectedArray.join();  

  // Display amount
  elementref = document.querySelector("#amount");
  element = elementref.getElementsByTagName("span");
  element[0].innerHTML = selectedArray.length; 

  // Display sum
  elementref = document.querySelector("#sum");
  element = elementref.getElementsByTagName("span");
  element[0].innerHTML = adder(selectedArray); 

  // Display average
  elementref = document.querySelector("#average");
  element = elementref.getElementsByTagName("span");
  element[0].innerHTML = averg(selectedArray); 

}; 


/*
SUM
At the beginning of the exercise, we coded a function that
takes an array as argument and returns the sum of its elements (if they are numbers).
This is the time to use it!
*/

function adder ( _array ) {
  let sum = 0;
  for (let i = 0; i < _array.length; i++) { 
    sum = sum + _array[i];
  }
  return sum;
}

/*
AVERAGE
At the beginning of the exercise, we coded a function that
takes an array as argument and returns the average of its elements (if they are numbers).
This is the time to use it!
Note that the average is often a number with a lot of decimals. Use the function roundString
below to always show a number that has one decimal.*/

function averg ( _array ) {
  // in here you must use adder
  if (_array.length < 1){
    return ""; 
  } 
  return roundString(adder(_array)/ _array.length, 1); 

}

function roundString(numberWithManyDecimals, decimals){
  // From: https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
}



