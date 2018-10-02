'use strict'

const store = require('../store.js')
const config = require('../config.js')

const playGame = function (clickedPosition) {
  // console.log('I am clickedPosition', clickedPosition, store.currentPlayer)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': `${clickedPosition}`,
          'value': `${store.currentPlayer}`
        },
        'over': false
      }
    }

  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  playGame,
  getGames
}
