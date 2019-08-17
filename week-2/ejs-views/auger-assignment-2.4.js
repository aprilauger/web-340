/*
============================================
; Title:  auger-assignment-2.4.js
; Author: April Auger
; Date:   17 August 2019
; Description: A JavaScript application that sets
; up an express server and uses EJS Views.
;===========================================
*/
// Required modules
var http = require('http');
var express = require('express');
var path = require('path');
var header = require("../../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 2.4") + '\n');

// Variables
var app = express();

// Location of views folder
app.set("views", path.resolve(__dirname, "views"));

// App uses the EJS templating engine
app.set("view engine", "ejs");

// Renders a view with Express
app.get("/", function(request, response){
	response.render("index",
	{
		firstName: "Jane",
		lastName: "Thompson",
		address: "1234 Harvard Way, Sacramento, CA 95818",
	});
});

// Start the server
http.createServer(app).listen(8080, function()
{});

// End program