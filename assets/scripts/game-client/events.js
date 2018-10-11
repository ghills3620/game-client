'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('../auth/ui.js')
const js = require('./../../index.js')
const store = require('../store.js')

const onPlayGame = function (event) {
  event.preventDefault()
  const clickedPosition = parseInt(event.target.getAttribute('id'))
  if ($(event.target)[0].innerText === '') {
    js.takeTurn(clickedPosition, event)
    // api.playGame(clickedPosition)
    // .then(ui.playGameSuccess)
    // .catch(ui.playGameFailure)
  }
  if (store.winner[0] === true) {
    $('#message').text(store.winner[1])
    $('#square').addClass('hidden')
    $('#display-message').html('Game Over please start New Game')
    $('#display-message').css('color', 'green')
    return store.winner
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
