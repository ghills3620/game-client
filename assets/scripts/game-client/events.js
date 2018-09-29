'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const js = require('../../index.js')

// const onCreate = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createExample(data)
//     .then(console.log)
//     .catch(console.log)
// }

const onPlayGame = function (event) {
  event.preventDefault()
  // console.log(parseInt(event.target.getAttribute('id')))
  const clickedPosition = parseInt(event.target.getAttribute('id'))
  // js.takeTurn(clickedPosition)

  if ($(event.target)[0].innerText === '') {
    // console.log(js.currentPlayer)
    // $(event.target).text(js.currentPlayer)
    const currentPlayer = js.takeTurn(clickedPosition)
    $(event.target).text(currentPlayer)
    const winner = js.checkForWinner(js.board)
    $('#message').text('Winner is ' + winner)

    // api.playGame(event)
    //   .then(ui.playGameSuccess)
    //   .catch(ui.playGameFailure)
    // console.log($(event.target)[0].innerText === '')
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
