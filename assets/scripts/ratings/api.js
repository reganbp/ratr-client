'use strict'
const config = require('../config.js')
const store = require('../store')

// User Auth requests
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
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// ratings requests
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
const getRatings = function () {
  console.log('did I get ratings?')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/ratings',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateRating = function (data) {
  console.log('api says data is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/ratings/' + data.id,
    data: {rating: data},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteRating = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/ratings/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}



module.exports = {
  signUp,
  signIn,
  createRating,
  getRatings,
  updateRating,
  deleteRating,
  changePassword,
  signOut
}
