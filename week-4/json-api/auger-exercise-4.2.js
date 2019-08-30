/*
============================================
; Title:  auger-exercise-4.2.js
; Author: April Auger
; Date:   30 August 2019
; Description: Application demonstrating JSON APIs.
;===========================================
*/

// Required modules
var express = require("express");
var http = require("http");
var logger = require("morgan");
var header = require("../../header.js");


// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 4.2") + '\n');

// Variable storing a new Express application
var app = express();

// Use morgan for logging
app.use(logger('dev'));

// Get the request, parse it, and return a JSON value
app.get("/customer/:id", function(request, response){

	// Parse the id from the string
	var id = parseInt(request.params.id, 10);

	// Send a JSON response
	response.json({
		firstName: "Leo",
		lastName: "Tolstoy",
		employeeId: id
	});
});

// Create a server and listen on port 8080
http.createServer(app).listen(8080, function(){
	console.groupCollapsed("Application started on port 8080");
});

// End program