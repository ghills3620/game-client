'use strict'

const store = require('../store.js')

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
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('corlor', 'red')
}

const newGameSuccess = function () {
  $('#display-message').html('New Game!')
  $('#display-message').css('corlor', 'green')
  $('#board').trigger('reset')
}

const newGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
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
  newGameFailure
}
