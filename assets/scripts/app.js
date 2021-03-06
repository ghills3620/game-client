'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const gameClientEvents = require('./game-client/events.js')
// const js = require('../../index.js')
// const store = require('../store.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#square').on('click', gameClientEvents.onPlayGame)
  $('#get-games').on('click', authEvents.onGetGames)
})
