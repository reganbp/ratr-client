'use strict'
const config = require('../config.js')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}
const createRating = function (data) {
  data.user_id = store.user.id
  console.log('the data is ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/ratings',
    data: {rating: data},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  createRating
}
