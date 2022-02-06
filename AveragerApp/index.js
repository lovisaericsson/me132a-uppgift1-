"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link:



// GLOBAL VARIABLES
// None allowed

// FUNCTION DECLARATIONS (in alphabetical order)

function adder ( _array ) {

  let sum = 0;
    for (let i = 0; i < _array.length; i++) { 
      sum = sum + _array[i];
    }
  return sum;

}
 
function averg ( _array ) {

  // in here you must use adder
  if (_array.length < 1){
    return ""; 
  } 
  return roundString(adder(_array)/ _array.length, 1); 

}

function createNumberDiv (){

  let elementRef = document.createElement ("div");
  elementRef.innerHTML = randomNumber(100);
     
  elementRef.addEventListener("click", function(){
      elementRef.classList.toggle("selected"); 
      updateResults("selected");
    });
    return elementRef;

}
  

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

// Remove all child nodes (if any)
  gridContainer.innerHTML = ""; 

  gridContainer.style.display="grid";
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns =`repeat(${C}, 1fr)`;
  for (let i = 0; i < (R * C); i++){
    gridContainer.appendChild( createNumberDiv() ); 
  }  

}

function randomNumber (max) {
  return Math.floor(max * Math.random());
}

function roundString(numberWithManyDecimals, decimals){

  // From: https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);

}

function updateResults(className){

  let selectedArray = getArrayOfSelectedNumbers(className);

    
  // Display sum
  let elementref = document.querySelector("#sum");
  let element = elementref.getElementsByTagName("span");
  element[0].innerHTML = adder(selectedArray); 

  // Display average
  elementref = document.querySelector("#average");
  element = elementref.getElementsByTagName("span");
  element[0].innerHTML = averg(selectedArray); 
  
  // Display selected
  elementref = document.querySelector("#selected");
  element = elementref.getElementsByTagName("span");
  element[0].innerHTML = selectedArray.join();  
  
  // Display amount
  elementref = document.querySelector("#amount");
  element = elementref.getElementsByTagName("span");
  element[0].innerHTML = selectedArray.length; 
  
}; 

// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS

document.querySelector("button").addEventListener("click", function(){
    gridMaker ( document.querySelector("#grid"),(document.querySelector("#inputRows").value) ,(document.querySelector("#inputCols").value) );
  });

// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.



  
  
  
  
  
  


  
  
  
  