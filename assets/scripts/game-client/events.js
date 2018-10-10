'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('../auth/ui.js')
const js = require('./../../index.js')
const store = require('../store.js')

const onPlayGame = function (event) {
  event.preventDefault()
  // console.log(parseInt(event.target.getAttribute('id')))
  const clickedPosition = parseInt(event.target.getAttribute('id'))
  // console.log('i am 1st ' + store.currentPlayer)
  // console.log(event)
  // js.takeTurn(clickedPosition)

  // console.log(store.winner)
  // if (store.winner === true) {
  // console.log('i am ' + store.winner)
  if ($(event.target)[0].innerText === '') {
    console.log(store.currentPlayer)
    // $(event.target).text(js.currentPlayer)
    js.takeTurn(clickedPosition, event)
    api.playGame(event.target.getAttribute('id'))
      .then(ui.playGameSuccess)
      .catch(ui.playGameFailure)
      // console.log('i am 2nd ' + store.currentPlayer)
    console.log(clickedPosition, event)
    // const winner = js.checkForWinner(store.board)
    if (store.winner[1] === 'winner is x' || store.winner[1] === 'winner is o') {
      // console.log(winner)
      return store.winner
    }
    $('#message').text(store.winner)

    console.log('API' + store.board, store.game.game.over)
    if (store.game.game.over === store.winner[0]) {
      $('#square').addClass('hidden')
      $('#display-message').html('Game Over please start New Game')
      $('#display-message').css('color', 'green')
    }
  }
  // }
}
module.exports = {
  // onCreate,
  onPlayGame

}

// let click = 0
// const onPlayGame = function (event) {
//   event.preventDefault()
//   if (click === %2) {
//     $(event.target).text('X')
//     click++
//   } else {
//     $(event.target).text('O')
//     click++
