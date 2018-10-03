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

  if ($(event.target)[0].innerText === '') {
    // console.log(js.currentPlayer)
    // $(event.target).text(js.currentPlayer)
    js.takeTurn(clickedPosition, event)
    console.log(clickedPosition, event)
    const winner = js.checkForWinner(store.board)
    if (winner === 'winner is x' || winner === 'winner is o') {
      // console.log(winner)
      return winner
    }
    $('#message').text(winner)
    api.playGame(event.target.getAttribute('id'))
      .then(ui.playGameSuccess)
      .catch(ui.playGameFailure)
  }
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
