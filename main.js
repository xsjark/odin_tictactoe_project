const gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
];

let player = "x"

const toggleString = (obj, string1, string2) => {
    player = obj === string1 ?  string2 : string1;
    console.log(player)
 }

const add = (x, y, symbol, array) => {
    array[y][x] = symbol;
    resetUI();
}

const resetUI = () => {
    container.innerHTML = "";
    renderBoard();
}

const container = document.getElementById("container"); 

const renderBoard = () => {
    gameBoard.forEach((row, rowno) => {
        row.forEach((cell, cellno) => {
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cell-div");
            cellDiv.textContent = cell;
            cellDiv.addEventListener("click", () => {
                add(cellno, rowno, player, gameBoard);
                toggleString(player, "x", "o")
            });
            container.appendChild(cellDiv)
        })
    })
}

renderBoard()
console.log(gameBoard)