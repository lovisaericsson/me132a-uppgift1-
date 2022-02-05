"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

function gridMaker (gridContainer, R, C) {
    gridContainer.style.display="grid";
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns =`repeat(${C}, 1fr)`;
   
   for (let i = 0; i < (R * C); i++){
   gridContainer.appendChild( createNumberDiv() ); 
   
    }  
   
 }
 
 function buttonGridmaker (){
     gridMaker ( document.querySelector("#grid"),(document.querySelector("#inputRows").value) ,(document.querySelector("#inputCols").value) );
 }
   
 document.querySelector("button").addEventListener("click", buttonGridmaker );

 function createNumberDiv (){
    let elementRef = document.createElement ("div");
    elementRef.innerHTML = Math.floor(100 * Math.random());
     
    elementRef.addEventListener("click", function(){
      elementRef.classList.toggle("selected"); 
    });
    return elementRef;
  }

  






 

