const container = document.querySelector('.container'); 
function createGrid(size= 16) {
    for (let i = 0; i < size; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('item')
        container.appendChild(gridItem)
    }
}

function changeOnHover() {

    function addColor(e) {
        e.target.classList.add('colored');
    }



    container.addEventListener('mousedown', addColor)
    
//     container.addEventListener('mouseout', (e) => {
//         if (e.target.classList.contains('colored')) {
//             e.target.classList.remove('colored')
//         }
//     })
}


createGrid()
changeOnHover()