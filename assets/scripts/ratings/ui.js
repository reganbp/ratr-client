const store = require('../store')
// const showMyRatings = require('./templates/my-ratings-list.handlebars')
const showRatingsTemplate = require('../templates/ratings-list.handlebars')
const showCreateBrewsTemplate = require('../templates/create-brew-response.handlebars')
// const updateRatingsList = require('../templates/update-ratings-list.handlebars')

// User Auth UI
const signUpSuccess = function (response) {
  document.getElementById('sign-up-form').reset()
}
const signInSuccess = function (response) {
  console.log('response ', response)
  store.user = response.user
  document.getElementById('sign-in-form').reset()
  $('.signed-out-view').hide()
  $('.signed-in-view').show()
}
const changePasswordSuccess = function (response) {
  console.log('changepw response is ', response)
  document.getElementById('change-password-form').reset()
}
const signOutSuccess = function (response) {
  console.log('signOut response is ', response)
  $('.signed-in-view').hide()
  $('.signed-out-view').show()
  $('#data-show').hide()
}






const createRatingSuccess = function (response) {
  console.log('you created a rating, the respose is ', response)
  console.log('the store is ', store)
}
const createRatingFailure = function (response) {
  console.log('failure, response is ', response)
}
const createBrewSuccess = function (response) {
  console.log('you created a rating, the respose is ', response)
  const showCreateBrewHtml = showCreateBrewsTemplate({ brews: response })
  $('#data-show').html(showCreateBrewHtml)
  $('.add-ratings-form').hide()
}
const getBrewsSuccess = function (response) {
  console.log('response is', response)
  const showCreateBrewHtml = showCreateBrewsTemplate({ brews: response.brews })
  $('#data-show').html(showCreateBrewHtml)
  $('.add-ratings-form').hide()
}
const getRatingsSuccess = function (response) {
  console.log('The response is ', response)
  const showRatingsHtml = showRatingsTemplate({ ratings: response.ratings })
  $('#data-show').html(showRatingsHtml)
  $('.update-ratings-form').hide()
}
const getMyRatingsSuccess = function (response) {
  console.log('The response is ', response)
  const data = { ratings: [] }
  response['ratings'].forEach(function (rating) {
    if (rating.user_id === store.user.id) {
      data.ratings.push(rating)
    }
  })
  const showRatingsHtml = showRatingsTemplate({ ratings: data.ratings })
  $('#data-show').html(showRatingsHtml)
  $('.update-ratings-form').hide()
}
const showRatingsForm = function (id) {
  console.log('id', id)
}
const updateRatingSuccess = function (response) {
  console.log('response is ', response)
}
const deleteRatingSuccess = function (response) {
  console.log('delete response is ', response)
}

module.exports = {
  signInSuccess,
  createRatingSuccess,
  createRatingFailure,
  createBrewSuccess,
  getBrewsSuccess,
  getRatingsSuccess,
  getMyRatingsSuccess,
  updateRatingSuccess,
  deleteRatingSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signUpSuccess,
  showRatingsForm
}
