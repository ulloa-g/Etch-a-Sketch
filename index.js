const gridContainer = document.querySelector('.container');
const btnDefault = document.querySelector('.default');
const btnRainbow = document.querySelector('.rainbow');
const btnPickColor = document.querySelector('.pick');
const btnErase = document.querySelector('.erase');
const btnSize = document.querySelector('.size');
const divItem = document.querySelector('.container > div');
const defaultSize = 16;
const defaultColor = '#252422';
function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    for(let i=0; i<size * size; i+=1) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        color = defaultColor;
        btnRainbow.addEventListener('click', ()=> {
            div.addEventListener('mouseover', ()=> {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor = "#" + randomColor;
            })
        });
        btnDefault.addEventListener('click', ()=> {
            div.addEventListener('mouseover', ()=> {
                div.style.backgroundColor = '#252422';
            })
        });
        btnErase.addEventListener('click', ()=> {
            div.addEventListener('mouseover', ()=> {
                div.style.backgroundColor = '#FFFCF2';
            })
        });
        div.addEventListener('mouseover', ()=> {
            div.style.backgroundColor = '#252422';
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
    console.log(chosenSize);
    if (chosenSize <= 64 && chosenSize > 0) {
        resetGrid();
        createGrid(chosenSize);
    }
    else if (chosenSize > 64){
        alert('Maximum value is 64');
    }
    else if (chosenSize < 0) {
        alert('Minimum value is 1');
    }
    else if(chosenSize == null) {
        return;
    }
    else {
        alert('Please type a valid number');
    }
});