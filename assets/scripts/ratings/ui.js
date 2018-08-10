const store = require('../store')
// const showMyRatings = require('./templates/my-ratings-list.handlebars')
const showRatingsTemplate = require('../templates/ratings-list.handlebars')
const showCreateBrewsTemplate = require('../templates/create-brew-response.handlebars')
// const updateRatingsList = require('../templates/update-ratings-list.handlebars')
// const eventEvent = require('./events.js')

// User Auth UI
const signUpSuccess = function (response) {
  document.getElementById('sign-up-form').reset()
  $('#in-success').modal()
}
const signUpFailure = function (response) {
  document.getElementById('sign-up-form').reset()
  $('#up-form-fail').modal()
}
const signInSuccess = function (response) {
  // console.log('response ', response)
  store.user = response.user
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  $('.signed-out-view').hide()
  $('.signed-in-view').show()
  $('#show-brews-button').hide()
  // $('#search-my-ratings').hide()
}
const signInFailure = function (response) {
  document.getElementById('sign-in-form').reset()
  $('#in-form-fail').modal()
}
const changePasswordSuccess = function (response) {
  // console.log('changepw response is ', response)
  document.getElementById('change-password-form').reset()
  $('#in-success').modal()
}
const changePasswordFailure = function (response) {
  document.getElementById('change-password-form').reset()
  $('#pass-fail').modal()
}
const signOutSuccess = function (response) {
  // console.log('signOut response is ', response)
  $('.signed-in-view').hide()
  $('.signed-out-view').show()
  $('#data-show').hide()
  $('#create-brew-form').hide()
  $('#show-brews-button').hide()
  // $('#search-my-ratings').hide()
  document.getElementById('create-brew-form').reset()
  document.getElementById('change-password-form').reset()
}
const signOutFailure = function (response) {
  $('#out-fail').modal()
}





const createRatingSuccess = function (response) {
  // console.log('you created a rating, the respose is ', response)
  // console.log('the store is ', store)
}
const createRatingFailure = function (response) {
  // console.log('failure, response is ', response)
  $('#rerate-fail').modal()
}
const createBrewSuccess = function (response) {
  // console.log('you created a rating, the respose is ', response)
  const showCreateBrewHtml = showCreateBrewsTemplate({ brews: response })
  document.getElementById('create-brew-form').reset()
  $('#data-show').html(showCreateBrewHtml)
  $('.add-ratings-form').hide()
  $('#show-brews-button').show()
  $('#show-my-ratings').show()
  $('#rate-button').show()
  $('#create-brew-form').hide()
}
const getBrewsSuccess = function (response) {
  // console.log('response is', response)
  const showCreateBrewHtml = showCreateBrewsTemplate({ brews: response.brews })
  $('#data-show').html(showCreateBrewHtml)
  $('.add-ratings-form').hide()
  $('#show-brews-button').hide()
  $('#show-my-ratings').show()
}
const getRatingsSuccess = function (response) {
  // console.log('The response is ', response)
  const showRatingsHtml = showRatingsTemplate({ ratings: response.ratings })
  $('#data-show').html(showRatingsHtml)
  $('.update-ratings-form').hide()
}
const getMyRatingsSuccess = function (response) {
  // console.log('The response is ', response)
  const data = { ratings: [] }
  response['ratings'].forEach(function (rating) {
    if (rating.user_id === store.user.id) {
      data.ratings.push(rating)
    }
  })
  if (data.ratings.length === 0) {
    const newHtml = '<br><h3>You have not rated anything yet</h3>'
    $('#data-show').html(newHtml)
    $('#show-brews-button').show()
    $('#show-my-ratings').hide()
  } else {
    const showRatingsHtml = showRatingsTemplate({ ratings: data.ratings })
    $('#data-show').html(showRatingsHtml)
    $('#show-brews-button').show()
    $('.update-ratings-form').hide()
    $('#show-my-ratings').hide()
    // $('#search-my-ratings').show()
  }
}
const showRatingsForm = function (id) {
  // console.log('id', id)
}
const updateRatingSuccess = function (response) {
  // console.log('response is ', response)
}
const deleteRatingSuccess = function (response) {
  // console.log('delete response is ', response)
}

module.exports = {
  signInSuccess,
  signInFailure,
  createRatingSuccess,
  createRatingFailure,
  createBrewSuccess,
  getBrewsSuccess,
  getRatingsSuccess,
  getMyRatingsSuccess,
  updateRatingSuccess,
  deleteRatingSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  showRatingsForm
}
