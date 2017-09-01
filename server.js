//Declare dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

//Set up the Express server and configure port for Heroku deployment
var app = express();
var PORT = process.env.PORT || 3000;

//set up the express app to perform body parsing
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//Adding the requirements for the routing files
//require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

//set up listener here
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});