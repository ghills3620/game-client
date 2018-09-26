'use strict'

const store = require('../store.js')
const config = require('../config.js')

const createExample = function (exampleData) {
  return $.ajax({
    url: config.apiUrl + '/examples',
    metod: 'POST',
    headers: {
      Authorization: `TOken token=${store.user.token}`
    },
    data: exampleData
  })
}

module.exports = {
  createExample
}
