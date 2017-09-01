//Adding routing for the data source, the array in friends.js which
//contains the survey submissions

var surveyData = require('../app/data/friends');

//Adding routes for handling the data
module.exports = function(app) {
  //TODO , put in an API GET route to display all possible friends

//API POST route to handle incoming survey data
//this route will also handle compatibility logic
  app.post('api/survey', function(req, res) {
    userAnswers.push(surveyData);
  });
  console.log(userAnswers);
};


