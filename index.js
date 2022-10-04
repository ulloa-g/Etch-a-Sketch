const gridContainer = document.querySelector('.container');
const btnBlack = document.querySelector('.black');
const btnRainbow = document.querySelector('.rainbow');
const btnPickColor = document.querySelector('.pick');
const btnErase = document.querySelector('.erase');
const divItem = document.querySelector('.container > div');
function createGrid() {
    const size = 16*16;
    for(let i=0; i<size; i+=1) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
    }
};
createGrid();