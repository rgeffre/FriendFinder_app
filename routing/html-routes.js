//Adding dependancies
var path = require('path');

//Adding routes to the html content and setting up the module export so we can
//include the routes in the server.js file

module.exports = function(app) {
  //HTML GET request for the survey page
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
  //Default route that sends users to the home page
  //if no matching route is found
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
