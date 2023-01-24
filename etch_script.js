// get grid-container element and store in constant for use
const gridContainer = document.getElementById('grid-container');

let row = 16;
let column = 16;
// loop that creates div grid
//  create  div for each row up to the number of columns
//  in each row div create square divs up to the number per row

for (let i = 0; i < row; i++) {   //create row divs
    const row = document.createElement('div');
    row.classList.add (`row${i+1}`, 'row');
    row.style.height = 960/row;

    gridContainer.appendChild (row);
    for (let j = 0; j < column; j++) {      // create each grid-box in the row
        const column = document.createElement('div');
        column.classList.add (`column${j+1}`, 'grid-box');

        row.appendChild (column);
    }
}