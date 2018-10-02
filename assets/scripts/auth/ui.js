'use strict'

const store = require('../store.js')

$('#square').addClass('hidden')
const signUpSucess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('corlor', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  console.log('store before adding user key', store)
  store.user = response.user
  console.log('store after adding user key', store)
  console.log('store.user.token', store.user.token)
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('corlor', 'red')
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#square').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('corlor', 'red')
}

const newGameSuccess = function (data) {
  $('#display-message').html('New Game!')
  $('#display-message').css('corlor', 'green')
  $('#square').removeClass('hidden')
  // $('#square').remove('reset
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).html('')
  }
  store.game = data
}

const newGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('corlor', 'red')
}

const playGameSuccess = function (data) {
  console.log(data)
  $('#display-message').html('Your Turn ' + store.currentPlayer)
  $('#display-message').css('corlor', 'green')
  if (store.game.game.cells === (store.board)) {
    console.log(store.game.game.cells.array[0])
    return 'game over'
  } else {
    return 'keep playing'
  }
}

const playGameFailure = function (data) {
  $('#display-message').html('Try Again')
  $('#display-message').css('corlor', 'red')
}

module.exports = {
  signUpSucess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  playGameSuccess,
  playGameFailure
}
