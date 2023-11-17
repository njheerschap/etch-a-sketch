const container = document.querySelector('.container'); 
const button = document.querySelector('button');

function createGrid(size= 16) {
    for (let i = 0; i < size; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('item')
        container.appendChild(gridItem)
    }
}

function changeGrid() {
    container.innerHTML = ""
    const widthField = document.querySelector('#width-field');
    const width = Number(widthField.value);
    const widthSquared = width * width 
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    createGrid(widthSquared)
}

function changeOnHover() {

    function addColor(e) {
        e.target.classList.add('colored');
    }

    function addColorOnMove() {
        container.addEventListener('mouseover', addColor)
    }

    container.addEventListener('mousedown', addColor)
    container.addEventListener('mousedown', addColorOnMove)
    container.addEventListener('mouseup', () => {
        container.removeEventListener('mouseover', addColor)
    })
}


createGrid()
changeOnHover()

button.addEventListener('click', () => {
    changeGrid()
})
