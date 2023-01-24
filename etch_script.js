// get elements and store in constants for use
const gridContainer = document.getElementById('grid-container');


let gridSize = 16;



// set height and width of grid box depending on grid size
//
// loop that creates div grid
//  create  div for each row up to the number of columns
//  in each row div create square divs up to the number per row

for (let i = 1; i <= gridSize; i++) {   //create row divs
    const row = document.createElement('div');
    row.classList.add (`row${i}`, 'row');

    gridContainer.appendChild (row);
    for (let j = 1; j <= gridSize; j++) {      // create each grid-box in the row
        const column = document.createElement('div');
        column.classList.add (`column${j}`, 'grid-box');
        column.id = `${i}-${j}`;
        row.appendChild (column);
    }
}

//listen for mouseover on grid-container and change background color of target 
gridContainer.addEventListener('mouseover', function(e) {
    const box = e.target;
    box.style.backgroundColor = 'black';
});




function etch (id) {  //change background color of each grid-box on mouseenter
    
}