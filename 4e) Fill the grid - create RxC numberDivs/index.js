"use strict";

/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/

function createNumberDiv (){
  let elementRef = document.createElement ("div");
  elementRef.innerHTML = Math.floor(100 * Math.random());
  return elementRef;
}

function gridMaker (gridContainer, R, C) {
   gridContainer.style.display="grid";
   gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
   gridContainer.style.gridTemplateColumns =`repeat(${C}, 1fr)`;
  
    //Första sättet:
   for (let i =0; i < R; i++){
    for(let j = 0; j < C; j++){ 
   gridContainer.appendChild( createNumberDiv() ); 
   }
}


   //Andra sättet:  
   //for (let i = 0; i < (R * C); i++){
     //gridContainer.appendChild( createNumberDiv() ); 
   //}  
  
}
   
gridMaker ( document.querySelector("#grid"), 2, 4 );


