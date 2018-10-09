'use strict'

const store = require('../store.js')

$('#square').addClass('hidden')
const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  console.log('store before adding user key', store)
  store.user = response.user
  console.log('store after adding user key', store)
  console.log('store.user.token', store.user.token)
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#new-game').removeClass('hidden')
  $('#get-games').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('Change password succesful')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#change-password-form').html('Password Failed to change, please try again')
  $('#change-password-form').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#display-message').html('Signout Succesful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#square').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('#change-password-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}

const newGameSuccess = function (data) {
  $('#display-message').html('New Game!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#square').removeClass('hidden')
  // $('#square').remove('reset
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).html('')
  }
  store.game = data
}

const newGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const playGameSuccess = function (data) {
  console.log(data)
  $('#display-message').html('Your Turn ' + store.currentPlayer)
  $('#display-message').css('color', 'green')
}

const playGameFailure = function (data) {
  $('#display-message').html('Try Again')
  $('#display-message').css('color', 'red')
}

const getGameSucess = function (data) {
  $('#display-message').html(`You have play ${data.games.length} games`)
  $('#square').addClass('hidden')
}

const getGameFailure = function (data) {
  $('#display-message').html('Your games failed to load, Try Again')
  $('#square').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  playGameSuccess,
  playGameFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getGameSucess,
  getGameFailure
}
