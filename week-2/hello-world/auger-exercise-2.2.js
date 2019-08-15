/*
============================================
; Title:  auger-exercise-2.2.js
; Author: April Auger
; Date:   14 August 2019
; Description: Hello world excercise with Express.
;===========================================
*/
// Required modules
var express = require('express');
var http = require('http');

var header = require("../../header.js");

// Start program

// Variable storing a new Express application
var app = express();

// Express middleware function
app.use(function(request, response)
{
	console.log('In comes a request to %s', request.url);
	response.end('Hello World\n');
});

// Create new server and listen on port 8080
http.createServer(app).listen(8080, function()
{
	// Output a message
	console.log('Application started on port %s', 8080);
});

// End program