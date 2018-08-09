'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const ratingsEvents = require('./ratings/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  ratingsEvents.addHandlers()
  $('.signed-in-view').hide()
  $('#create-brew-form').hide()
})
