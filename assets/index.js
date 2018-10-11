const store = require('./scripts/store.js')

// 1.  create empty game board
// 2.  have empty board = and empty array
// const board = ['', '', '', '', '', '', '', '', '']

// 3.  create signed in player = to player_x
// let currentPlayer = 'x'
//
//  4.  add current player to position on board
// board[0] = currentPlayer
//
// 5.  Switch current player to o
// currentPlayer = 'o'
//
// 6.  add current player to position on board
// board[1] = currentPlayer

// 7. Write a function that accepts a board position and adds the currentPlayer to it on the board
const addPlayerToBoard = function (boardPosition) {
  if (store.board[boardPosition] > store.board[8]) {
    return 'Warning: Not a vaild choice'
  }
  store.board[boardPosition] = store.currentPlayer
  // if (checkForWinner === true) {
  //   return 'working'
  // }
}
// 8.  Write a function that rotates the turn
const rotatePlayer = function () {
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
  return store.currentPlayer
}

// Write a function that checks if someone wins the game
const checkForWinner = function (board) {
  // check for top row winner by seeing if all match and are not empty string
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
    return [true, 'Winner  ' + board[0]]
  }
  if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
    return [true, 'Winner is ' + board[3]]
    // return 'Winner is ' + board[3]
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
    return [true, 'Winner is ' + board[6]]
    // return 'Winner is ' + board[6]
  }
  if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
    return [true, 'Winner is ' + board[0]]
    // return 'Winner is ' + board[0]
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
    return [true, 'Winner is ' + board[1]]
    // return 'Winner is ' + board[1]
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
    return [true, 'Winner is ' + board[2]]
    // return 'Winner is ' + board[2]
  }
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
    return [true, 'Winner is ' + board[0]]
    // return 'Winner is ' + board[0]
  }
  if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
    return [true, 'Winner is ' + board[2]]
    // return 'Winner is ' + board[0]
  }
  if (!(board[0] === '' || board[1] === '' || board[2] === '' || board[3] === '' ||
  board[4] === '' || board[5] === '' || board[6] === '' || board[7] === '' ||
  board[8] === '')) {
    return [true, 'Its a tie']
    // return 'Its a tie'
  } else {
    return [false]
  }
}

// 11. Write a function that doesn't allow occupied spots to be choosen
const spotTaken = function (boardPosition) {
  if (store.board[boardPosition] === 'x' || store.board[boardPosition] === 'o') {
    return true
  }
  return false
}

const takeTurn = function (boardPosition, event) {
  // // console.log('i am' + store.board)
  // // console.log(winner)
  if (spotTaken(boardPosition) === false) {
    addPlayerToBoard(boardPosition)
    $(event.target).text(store.currentPlayer)
    rotatePlayer()
    // // console.log(checkForWinner(board))
    // checkForWinner(store.board)
    store.winner = checkForWinner(store.board)
    // console.log(store.winner[0])
  }
  return store.currentPlayer
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(1)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(2)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotcleTaken(boardPosition) === false) {
  //   addPlayerToBoard(3)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(4)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(5)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(6)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(7)
  //   checkForWinner()
  //   rotatePlayer()
  // }
  //
  // if (spotTaken(boardPosition) === false) {
  //   addPlayerToBoard(8)
  //   checkForWinner()
  //   rotatePlayer()
  // }
}
// takeTurn(8)
// takeTurn(9)
// takeTurn(9)
// takeTurn(7)
//
// // console.log(board)
$('#change-password-form').hide()
module.exports = {
  takeTurn,
  addPlayerToBoard,
  rotatePlayer,
  checkForWinner

}
