// get elements and store in constants for use
const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const changeGrid = document.getElementById('change-grid');

let gridSize = 25;

drawGrid(gridSize);

resetBtn.addEventListener('click', () => {
    drawGrid(gridSize);
});

changeGrid.addEventListener('click', () => {
    gridSize = prompt('What size grid would you like?');
    drawGrid(gridSize);
})

// set height and width of grid box depending on grid size

// function that creates div grid

function drawGrid (gridSize) {
    if (gridSize <= 100 && gridSize != null && gridSize != '' && gridSize > 0) {
        gridContainer.replaceChildren();
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
    } else if (gridSize > 100 || gridSize < 1) {
        gridSize = prompt('That wasn\'t a valid number, between 1-100 please. What size grid would you like?');
        drawGrid(gridSize);
    } else {
        gridSize = prompt('What grid size would you like this time?');
        drawGrid(gridSize);
        console.log(gridSize);
    }
}

//listen for mouseover on grid-container and change background color of target 
gridContainer.addEventListener('mouseover', function(e) {
    const box = e.target;
    box.style.backgroundColor = 'black';
    console.log(box);
});