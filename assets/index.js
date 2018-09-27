// 1.  create empty game board
// 2.  have empty board = and empty array
const board = ['', '', '', '', '', '', '', '', '']

// 3.  create signed in player = to player_x
let currentPlayer = 'x'

//  4.  add current player to position on board
board[0] = currentPlayer

// 5.  Switch current player to o
currentPlayer = 'o'

// 6.  add current player to position on board
board[1] = currentPlayer

// 7. Write a function that accepts a board position and adds the currentPlayer to it on the board
const addPlayerToBoard = function (boardPosition) {
  board[boardPosition] = currentPlayer
}
// 8.  Write a function that rotates the turn
const rotatePlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

// Write a function that checks if someone wins the game
const checkForWinner = function () {
  // check for top row winner by seeing if all match and are not empty string
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== board['']) {
    return 'Winner is ' + board[0]
    // check for all other combos
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== board['']) {
    return 'Winner is ' + board[3]
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== board['']) {
    return 'Winner is ' + board[6]
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== board['']) {
    return 'Winner is ' + board[0]
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== board['']) {
    return 'Winner is ' + board[1]
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== board['']) {
    return 'Winner is ' + board[2]
  } else if (board[0] === board[2] && board[2] === board[6] && board[0] !== board['']) {
    return 'Winner is ' + board[0]
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== board['']) {
    return 'Winner is ' + board[0]
  } else {
    return 'Its a Tie'
  }
}

// 11. Write a function that doesn't allow occupied spots to be choosen
const spotTaken = function (boardPosition) {
  if (boardPosition === 'x' || boardPosition === 'o') {
    return true
  }
  return false
}

const takeTurn = function (boardPosition) {
  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(0)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(1)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(2)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(3)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(4)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(5)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(6)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(7)
    checkForWinner()
    rotatePlayer()
  }

  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(8)
    checkForWinner()
    rotatePlayer()
  }
}
// takeTurn(8)
// takeTurn(9)
// takeTurn(9)
// takeTurn(7)
//
// console.log(board)
module.export = {
  takeTurn

}
