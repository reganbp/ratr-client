const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')

// User Auth Events
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(openingGetBrews)
    .catch(authUi.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('pw data is', data)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

// ratings events
const onCreateRating = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.createRating(data)
    .then(authUi.createRatingSuccess)
    .catch(authUi.createRatingFailure)
}
const onCreateBrew = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.createBrew(data)
    .then(authUi.createBrewSuccess)
    .catch(authUi.createBrewFailure)
}
const onGetRatings = function (event) {
  event.preventDefault()

  authApi.getRatings()
    .then(authUi.getRatingsSuccess)
    .catch(authUi.getRatingsFailure)
}
const onGetMyRatings = function (event) {
  event.preventDefault()

  authApi.getRatings()
    .then(authUi.getMyRatingsSuccess)
    .catch(authUi.getMyRatingsFailure)
}
const onGetBrews = function (event) {
  event.preventDefault()
  authApi.getBrews()
    .then(authUi.getBrewsSuccess)
    .catch(authUi.getBrewsFailure)
}

const onUpdateRating = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)

  authApi.updateRating(data)
    .then(authUi.updateRatingSuccess)
    .then(onGetMyBrewRatings)
    .catch(authUi.updateRatingFailure)
}
const onDeleteRating = function (event) {
  event.preventDefault()
  const ratingId = $(event.target).closest('ul').attr('data-id')
  const data = { id: ratingId }
  authApi.deleteRating(data)
    .then(authUi.deleteRatingSuccess)
    .then(onGetMyBrewRatings)
    .catch(authUi.deleteRatingFailure)
}
const onGetMyBrewRatings = function () {
  authApi.getRatings()
    .then(authUi.getMyRatingsSuccess)
    .catch(authUi.getMyRatingsFailure)
}
const openingGetBrews = function () {
  authApi.getBrews()
    .then(authUi.getBrewsSuccess)
    .catch(authUi.getBrewsFailure)
}
const onShowRateForm = function (event) {
  const brewId = $(event.target).closest('ul').attr('data-id')
  $('#brew-form-' + brewId).show()
  $('.handlebars-form-hidden').hide()
}
const onShowUpdateRating = function (event) {
  const ratingId = $(event.target).closest('ul').attr('data-id')
  console.log('clicked', ratingId)
  $('#rating-form-' + ratingId).show()
  $('.handlebars-form-hidden').hide()
}
const onShowCreateForm = function (event) {
  event.preventDefault()
  $('#create-brew-form').show()
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('submit', onSignOut)
  $('#show-my-ratings').on('click', onGetMyRatings)
  $('#show-all-ratings').on('click', onGetRatings)
  $('#create-rating-form').on('submit', onCreateRating)
  $('#update-ratings-form').on('submit', onUpdateRating)
  $('#delete-ratings-form').on('submit', onDeleteRating)
  $('#create-brew-form').on('submit', onCreateBrew)
  $('#show-brews-button').on('click', onGetBrews)
  $('.data-show').on('click', '.show-brew-to-rate', onShowRateForm)
  $('.data-show').on('submit', '.add-ratings-form', onCreateRating)
  $('.data-show').on('click', '.show-rating-to-update', onShowUpdateRating)
  $('.data-show').on('submit', '.update-ratings-form', onUpdateRating)
  $('.data-show').on('click', '.show-rating-to-delete', onDeleteRating)
  $('#rate-button').on('click', onShowCreateForm)
}

module.exports = {
  addHandlers
}
