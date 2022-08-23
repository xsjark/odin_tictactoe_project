const gameBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const add = (x, y, symbol, array) => {
    array[y][x] = symbol;
    console.log(gameBoard)
}

const container = document.getElementById("container"); 

const renderBoard = () => {
    gameBoard.forEach(row => {
        row.forEach(cell => {
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cell-div");
            cellDiv.textContent = cell;
            container.appendChild(cellDiv)
        })
    })
}

renderBoard()
console.log(gameBoard)