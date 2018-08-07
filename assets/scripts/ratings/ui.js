const store = require('../store')
// const showMyRatings = require('./templates/my-ratings-list.handlebars')
const showRatingsTemplate = require('../templates/ratings-list.handlebars')

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
}



const createRatingSuccess = function (response) {
  console.log('you created a rating, the respose is ', response)
  console.log('the store is ', store)
  // document.getElementById('create-rating-form').reset()
  // $('#create').hide()
  // $('.new-recipe').show()
  // $('.new-recipe-response').html('Name: ' + response['recipe'].name)
  // const newHTML = '<h2>New Rating!</h2><li><h3>' + response['rating'].name + '</h3><br/><h4> Description: ' + response['recipe'].description + '<br/> Extract: ' + response['recipe'].extract + '<br/>Grains: ' + response['recipe'].grains + '<br/>Hops: ' + response['recipe'].hops + '<br/>Yeast: ' + response['recipe'].yeast + '<br/>Directions: ' + response['recipe'].directions + '</h4></li>'
  // $('#get-recipe').show()
  // $('#get-recipe').html(newHTML)
}
const createRatingFailure = function (response) {
  // console.log('failure, response is ', response)
  // document.getElementById('create-recipe-form').reset()
  // $('#create-fail').modal()
}
const getRatingsSuccess = function (response) {
  console.log('The response is ', response)
  const showRatingsHtml = showRatingsTemplate({ ratings: response.ratings })
  $('#data-show').html(showRatingsHtml)
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
  getRatingsSuccess,
  getMyRatingsSuccess,
  updateRatingSuccess,
  deleteRatingSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signUpSuccess
}
