//Linking to data array in friends.js file
var surveyData = require('../app/data/friends.js');
//console.log(JSON.stringify(surveyData));

//Setting up routing for API requests
module.exports = function(app) {

//API GET Requests for handling when users visit a page

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);

    console.log(JSON.stringify(surveyData));
  });

//API POST route to handle incoming survey data
//this route will also handle compatibility logic

    app.post('/api/friends', function(req, res) {
      surveyData.push(req.body);
      console.log(JSON.stringify.surveyData);
    });
};





//TODO , put in an API GET route to display all possible friends
