const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}
const onCreateRating = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.createRating(data)
    .then(authUi.createRatingSuccess)
    .catch(authUi.createRatingFailure)
}
const onGetRatings = function (event) {
  event.preventDefault()

  authApi.getRatings()
    .then(authUi.getRatingsSuccess)
    .catch(authUi.getRatingsFailure)
}

const onUpdateRating = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)

  authApi.updateRating(data)
    .then(authUi.updateRatingSuccess)
    .catch(authUi.updateRatingFailure)
}

const addHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#create-rating-form').on('submit', onCreateRating)
  $('#show-my-ratings').on('click', onGetRatings)
  $('#update-ratings-form').on('submit', onUpdateRating)
}

module.exports = {
  addHandlers
}
