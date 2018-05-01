document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 1
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 1
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    }
  ]
}








function startGame() {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++)
    var surroundingMines = countSurroundingMines(board.cells[i]);
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  for (var a = 0; a < board.cells.length; a++) {
    if (board.cells[a].isMine === true && board.cells[a].isMarked === true) {
      return;
    }
    else if (board.cells[a].isMine === false && board.cells[a].hidden === true) {
      return;
    }
  }

lib.displayMessage('You win!')
}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var count = 0
  var surrounding = getSurroundingCells(cell.row, cell.col);
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      count++;
    }
  }
  return count;
}



