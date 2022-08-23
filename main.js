let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let player = "x";

let winner = "";

const resetArray = () => {
    gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    console.log(`${player} wins`)
}
const checkHorizontal = (row, column, symbol, array) => {
  switch (column) {
    case 0:
        if (array[row][1] == symbol && array[row][2] == symbol) {
            return true
        } else {
            return false
        }
    case 1:
        if (array[row][0] == symbol && array[row][2] == symbol) {
            return true
        } else {
            return false
        }
    case 2:
        if (array[row][0] == symbol && array[row][1] == symbol) {
            return true
        } else {
            return false
        }
    default:
        return false
  }
};

const checkVertical = (row, column, symbol, array) => {
    switch (row) {
      case 0:
          if (array[1][column] == symbol && array[2][column] == symbol) {
            return true
          } else {
            return false
        }
      case 1:
          if (array[0][column] == symbol && array[2][column] == symbol) {
            return true
          } else {
            return false
        }
      case 2:
          if (array[0][column] == symbol && array[1][column] == symbol) {
            return true
          } else {
            return false
        }
      default:
          break
    }
};
const checkDiagonal = (row, column, symbol, array) => {
    switch (column) {
        case 0:
            if (row == 0 && array[1][1] == symbol && array[2][2]  == symbol) {
                return true
            } 
            else if (row == 2 && array[1][1] == symbol && array[0][2]  == symbol) {
                return true
            }  else {
                return false
            }
        case 1:
            if (row == 1 && array[0][0] == symbol && array[2][2] == symbol) {
                return true
            }  else {
                return false
            }
        case 2:
            if (row == 0 && array[1][1] == symbol && array[2][0]  == symbol) {
                return true
            } 
            else if (row == 2 && array[1][1] == symbol && array[0][0]  == symbol) {
                return true
            }  else {
                return false
            }
        default:
            break
      }
};

const toggleString = (obj, string1, string2) => {
  player = obj === string1 ? string2 : string1;
};

const playTurn = (row, column, symbol, array) => {
  if (!array[row][column]) {
    array[row][column] = symbol;
    resetUI();
    console.log(checkHorizontal(row, column, symbol, array));
    console.log(checkVertical(row, column, symbol, array));
    console.log(checkDiagonal(row, column, symbol, array));
    toggleString(player, "x", "o");
  }
};

const resetUI = () => {
  container.innerHTML = "";
  renderArray(gameBoard);
};

const container = document.getElementById("container");

const renderArray = (array) => {
  array.forEach((row, rowno) => {
    row.forEach((cell, cellno) => {
      let cellDiv = document.createElement("div");
      cellDiv.classList.add("cell-div");
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", () => {
        playTurn(rowno, cellno, player, gameBoard);
      });
      container.appendChild(cellDiv);
    });
  });
};

renderArray(gameBoard);
