'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createExample(data)
    .then(console.log)
    .catch(console.log)
}

module.exports = {
  onCreate
}
