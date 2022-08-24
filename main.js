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
};

const refreshUI = (array) => {
  container.innerHTML = "";
  Board(array).renderArray(array);
};
/////////////////////////
const Board = (array) => {
  const renderArray = () => {
    array.forEach((row, rowno) => {
      row.forEach((cell, cellno) => {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("cell-div");
        cellDiv.textContent = cell;
        cellDiv.addEventListener("click", () => {
          Turn(rowno, cellno, player, gameBoard).playTurn();
        });
        container.appendChild(cellDiv);
      });
    });
  };
  return { renderArray };
};

const Turn = (row, column, symbol, array) => {
  const checkHorizontal = () => {
    switch (column) {
      case 0:
        if (array[row][1] == symbol && array[row][2] == symbol) {
          return true;
        } else {
          return false;
        }
      case 1:
        if (array[row][0] == symbol && array[row][2] == symbol) {
          return true;
        } else {
          return false;
        }
      case 2:
        if (array[row][0] == symbol && array[row][1] == symbol) {
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  };
  const checkVertical = () => {
    switch (row) {
      case 0:
        if (array[1][column] == symbol && array[2][column] == symbol) {
          return true;
        } else {
          return false;
        }
      case 1:
        if (array[0][column] == symbol && array[2][column] == symbol) {
          return true;
        } else {
          return false;
        }
      case 2:
        if (array[0][column] == symbol && array[1][column] == symbol) {
          return true;
        } else {
          return false;
        }
      default:
        break;
    }
  };
  const checkDiagonal = () => {
    switch (column) {
      case 0:
        if (row == 0 && array[1][1] == symbol && array[2][2] == symbol) {
          return true;
        } else if (row == 2 && array[1][1] == symbol && array[0][2] == symbol) {
          return true;
        } else {
          return false;
        }
      case 1:
        if (row == 1 && array[0][0] == symbol && array[2][2] == symbol) {
          return true;
        } else {
          return false;
        }
      case 2:
        if (row == 0 && array[1][1] == symbol && array[2][0] == symbol) {
          return true;
        } else if (row == 2 && array[1][1] == symbol && array[0][0] == symbol) {
          return true;
        } else {
          return false;
        }
      default:
        break;
    }
  };

  const checkDraw = () => !array.flat().includes("");
  const playTurn = () => {
    console.log(player);
    if (!array[row][column]) {
      array[row][column] = symbol;
      refreshUI(array);
      if (
        checkHorizontal(row, column, symbol, array) ||
        checkVertical(row, column, symbol, array) ||
        checkDiagonal(row, column, symbol, array)
      ) {
        setTimeout(function () {
          alert(`${symbol} wins`);
          resetArray();
          refreshUI(array);
        }, 0);
      } else if (checkDraw(gameBoard)) {
        setTimeout(function () {
          alert("Draw");
          resetArray();
          refreshUI(array);
        }, 0);
      } else {
        toggleString(player, "o", "x");
      }
    }
  };
  return { playTurn, checkHorizontal, checkVertical, checkDiagonal, checkDraw };
};

const toggleString = (obj, string1, string2) => {
  player = obj === string1 ? string2 : string1;
};

const container = document.getElementById("container");

const board = Board(gameBoard);

board.renderArray();
