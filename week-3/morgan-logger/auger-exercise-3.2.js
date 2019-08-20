/*
============================================
; Title:  auger-exercise-3.2.js
; Author: April Auger
; Date:   20 August 2019
; Description: Application on how to setup
;              server logging using Morgan.
;===========================================
*/
// Required modules
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var header = require("../../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 3.2") + '\n');

// Variable storing a new Express application
var app = express();

// Set the location for th views folder
app.set('views', path.resolve(__dirname, 'views'));

// Set the app to use the EJS templating engine
app.set('view engine', 'ejs');

// Use the logger
app.use(logger('dev'));

// Get request and return a response to the index.ejs page
app.get('/', function(request, response) {
	response.render('index', {
		message: 'Hi my name is April Auger and this is my completed exercise 3.2 on how to setup server logging using Morgan.'
	});
});

// Start the server and listen on port 3000
http.createServer(app).listen(3000, function() {
	console.log('Application started and listening on port %s', 3000);
});

// End program