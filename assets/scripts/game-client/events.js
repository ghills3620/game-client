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
  // js.takeTurn(clickedPosition)

// console.log(store.winner)
  // if (store.winner === true) {
  console.log('i am ' + store.winner)
  if ($(event.target)[0].innerText === '') {
    // console.log(js.currentPlayer)
    // $(event.target).text(js.currentPlayer)
    js.takeTurn(clickedPosition, event)
    console.log(clickedPosition, event)
    const winner = js.checkForWinner(store.board)
    if (store.winner[1] === 'winner is x' || store.winner[1] === 'winner is o') {
      // console.log(winner)
      return winner
    }
    $('#message').text(winner)

    api.playGame(event.target.getAttribute('id'))
      .then(ui.playGameSuccess)
      .catch(ui.playGameFailure)
      console.log('API' + store.board)
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
