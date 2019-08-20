/*
============================================
; Title:  auger-exercise-3.3.js
; Author: April Auger
; Date:   20 August 2019
; Description: Application on how to setup
;              advanced routing.
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
console.log(header.display("April", "Auger", "Exercise 3.3") + '\n');

// Variable storing a new Express application
var app = express();

// Set the location for the views folder
app.set('views', path.resolve(__dirname, 'views'));

// Set app to use the EJS templating engine
app.set('view engine', 'ejs');

// Use the logger
app.use(logger('dev'));

// Get the request and return a response to index.ejs
app.get('/:productId', function(request, response) {
	// Store the product id retrieved from the URL
	var productId = parseInt(request.params.productId, 10);

	response.render('index', {
		productId: productId
	});
});

// Create a server and listen on port 3000
http.createServer(app).listen(3001, function() {
	console.log('Application started and listening on port %s', 3001);
});