// get elements and store in constants for use
const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');

let gridSize = 25;

drawGrid(gridSize);

resetBtn.addEventListener('click', () => {
    gridSize = prompt('What size grid would you like?');
    drawGrid(gridSize);
});

// set height and width of grid box depending on grid size

// function that creates div grid

function drawGrid (gridSize) {
    if (gridSize <= 100) {
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
    } else {
        gridSize = prompt('That was too big, 100 or under please. What size grid would you like?');
        drawGrid(gridSize);
    }
}

//listen for mouseover on grid-container and change background color of target 
gridContainer.addEventListener('mouseover', function(e) {
    const box = e.target;
    box.style.backgroundColor = 'black';
    console.log(box);
});