/*
============================================
; Title:  Assignment 5.4
; Author: April Auger
; Date:   3 September 2019
; Description: Demonstrates how to create a user
;			   interface with Express and EJS.
;===========================================
*/

// Required modules
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var header = require('../header.js');

// Start program

// Output the header to the console
console.log(header.display('April', 'Auger', 'Assignment 5.4') + '\n');

// Variable storing a new Express application
var app = express();

// Sets up path to assets directory
var assets = path.resolve(__dirname, "assets");

// Sends static files from the assets directory
app.use('/assets', express.static(assets));

// Location of views folder
app.set('views', path.resolve(__dirname, 'views'));

// App uses the EJS templating engine
app.set('view engine', 'ejs');

// Use morgan for advanced logging
app.use(logger('short'));

// Process the get from the index page and return a response.
app.get('/', function(request, response){
	response.render('index', {
		title: "Home Page",
		message: "Content coming soon!"
	});
});

// Process the get from the list page and return a response.
app.get('/list', function(request, response){
	response.render('list', {
		title: "List Employee Records",
		message: "Content coming soon!"
	});
});

// Process the get request from the list page and return a response.
app.get('/new', function(request, response){
	response.render('new', {
		title: "Create Employee Record",
		message: "Please complete the following fields."
	});
});

// Process the get request from the about page and return a response.
app.get('/view:employeeId', function(request, response){
	// Store the employee id retrieved from the URL
	var employeeId = parseInt(request.params.employeeId, 10);

	response.render('view', {
		title: "Employee Record Details",
		employeeId: employeeID
	});
});

// Process the get request from the about page and return a response.
app.get('/about', function(request, response){
	response.render('about', {
		title: "About",
		message: "Content coming soon!"
	});
});

// Get request from the list page and return a response.
app.get('/contact', function(request, response){
	response.render('contact', {
		title: "Contact",
		message: "Content coming soon!"
	});
});

// Create a server and listen on port 8080
http.createServer(app).listen(8080, function(){
	console.log('Application started on port 8080!');
});