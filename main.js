const gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
];

let player = "x";

const toggleString = (obj, string1, string2) => {
    player = obj === string1 ?  string2 : string1;
 }

const add = (x, y, symbol, array) => {
    if(!array[y][x]) {
        array[y][x] = symbol;
        toggleString(player, "x", "o")
        resetUI();
    }
}

const resetUI = () => {
    container.innerHTML = "";
    renderArray(gameBoard)
}

const container = document.getElementById("container"); 

const renderArray = (array) => {
    array.forEach((row, rowno) => {
        row.forEach((cell, cellno) => {
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cell-div");
            cellDiv.textContent = cell;
            cellDiv.addEventListener("click", () => {
                add(cellno, rowno, player, gameBoard);
            });
            container.appendChild(cellDiv)
        })
    })
}

renderArray(gameBoard);