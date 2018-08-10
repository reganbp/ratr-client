# WDI-025 Capstone - Full Stack Project Front End


![Screenshot](https://i.imgur.com/y3JpbFW.png)

---
### Planning

I planned this project with the intention of connecting to a third party API to search through an established database for existing brews.  I developed wireframes and user stories (see below) to help guide me along the way.  The Back End was built out first, so in building the front end I planned to attack the Front End in this way

- Build a basic ui to test the users ability to authenticate
- Build and test CRUD actions in JavaScript
- Build a basic ui for CRUD actions
- Style a little
- Modify actions to only show what I wanted to show
- Modify ui as needed
- Debug and modify as needed

---
### Development

With the Back End built out, I started the devlopment by adding simple forms to test to make sure that my api routes were giving correct data returns.  When they weren't, I debugged to make sure that the data was in the correct form.  I used jQuery for event listeners and JavaScript to handle data manipulation when needed.  I then attempted to add some UI styling so things displayed correctly.  I used Handlebars to handle iterations of data to display.  I made some attempts to add some nice features like connecting to my own API for homebrews so they could be rated as well (see future fixes) but ran into problems so only CRUD features are left in for this iteration.

---
### Future Fixes

- Reverse order of display so the most recently updated item displays first
- Limit opening display to a fixed number of recently added items, instead of the whole list of items
- Integrate with a third party API or seed a Database so users will only have to search and rate
  - Shoutout to [Open Beer Database](http://openbeerdb.com/) for leaving their old database dump available while they are upgrading (as soon as I learn MySQL I will be seeding my database until I get a third party key)
- Change styling to be much more user friendly and appealing

---
### Technologies

- JavaScript
- jQuery
- AJAX
- HTML/CSS
- Handlebars
- Bootstrap

---
### User Stories

As a user of this app I would like to

- Log in to my own account
- Update my account details
- Rate a brew and have it save
- Update/Delete my ratings if I change my mind
- Search for brews to rate
- Add any brew that isn't in the database

---
### Links

- [Wireframes](https://imgur.com/a/NRxTUp0)
- [Back End Repo](https://github.com/reganbp/ratr-api)
- [Back End Deployed](https://floating-temple-84056.herokuapp.com/)
- [Front End Deployed](https://reganbp.github.io/ratr-client/)

---
Feel free to fork, clone, and `npm install` dependencies to have your own copy

<=><=><=><=><=><=><=><=><=><=><=><=><=><=><=><=><=><=><=><=><=>

Thanks to General Assembly and all their support!
