const gridContainer = document.querySelector('.container');
const btnBlack = document.querySelector('.black');
const btnRainbow = document.querySelector('.rainbow');
const btnPickColor = document.querySelector('.pick');
const btnErase = document.querySelector('.erase');
const btnSize = document.querySelector('.size');
const divItem = document.querySelector('.container > div');
const defaultSize = 16;
function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    for(let i=0; i<size * size; i+=1) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        div.addEventListener('mouseover', ()=> {
            div.style.backgroundColor = 'black';
        })
    }
};
// this function is very important, here I learn how to reset values from what really is on the .html file
function resetGrid() {
    gridContainer.innerHTML = '';
};
createGrid(defaultSize);
btnSize.addEventListener('click', ()=> {
    chosenSize = prompt('What size do you prefer the square grid?', 16);
    resetGrid();
    createGrid(chosenSize);
})