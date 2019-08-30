/*
============================================
; Title:  auger-exercise-4.3.js
; Author: April Auger
; Date:   30 August 2019
; Description: Application demonstrating how
;			   to customize status code messages
;			   on an Express server.
;===========================================
*/

// Required modules
var express = require("express");
var http = require("http");
var logger = require("morgan");
var header = require("../../header.js");


// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 4.3") + '\n');

// Variable storing a new Express application
var app = express();

// Use morgan for logging
app.use(logger("dev"));

// Get request for 404 status code
app.get("/not-found", function(request, response){
	response.status(404);

	// Return a response in JSON
	response.json({
		error: "Resource not found."
	});
});

// Get request for 200 status code
app.get("/ok", function(request, response){
	response.status(200);

	// Return a response in JSON
	response.json({
		message: "Page loaded correctly."
	});
});

// Get request for 501 status code
app.get("/not-implemented", function(request, response){
	response.status(501);

	// Return a response in JSON
	response.json({
		error: "The page has not been implemented"
	});
});

// Create a server and listen on port 3000
http.createServer(app).listen(3000, function(){
	console.groupCollapsed("Application started on port 3000");
});

// End program