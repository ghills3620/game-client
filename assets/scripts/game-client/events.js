'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// const onCreate = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createExample(data)
//     .then(console.log)
//     .catch(console.log)
// }

const onPlayGame = function (event) {
  event.preventDefault()
  api.playGame(event)
    .then(ui.playGameSuccess)
    .catch(ui.playGameFailure)
}

module.exports = {
  // onCreate,
  onPlayGame
}
