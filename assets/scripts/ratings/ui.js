const store = require('../store')

const signInSuccess = function (response) {
  console.log('response ', response)
  store.user = response.user
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('sign-in-dropdown').reset()

  // $('.before-button').hide()
  // $('.after-button').show()
}
const createRatingSuccess = function (response) {
  console.log('you created a rating, the respose is ', response)
  console.log('the store is ', store)
  // document.getElementById('create-recipe-form').reset()
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

module.exports = {
  signInSuccess,
  createRatingSuccess,
  createRatingFailure
}
