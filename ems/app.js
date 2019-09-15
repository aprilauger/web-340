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
var mongoose = require('mongoose');

// Start program

// Output the header to the console
console.log(header.display('April', 'Auger', 'Assignment 6.4') + '\n');

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

// Database Connection String
var mongoDB = "mongodb+srv://aauger:wNoz7FuS2dYd2aHb@buwebdev-cluster-1-bzl71.mongodb.net/cms?retryWrites=true&w=majority";

// Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// Promise
mongoose.Promise = global.Promise;

// Variable to hold database connection
var db = mongoose.connection;

// General error handling
db.on("error", console.error.bind(console, "MongoDB connected error: "));

// Display message once connected to the database
db.once("open", function() {
    console.log("Application connected to MongoDB Atlas");
});

// Create a server and listen on port 8080
http.createServer(app).listen(8080, function(){
	console.log('Application started on port 8080!');
});

// Process the get from the index page and return a response.
app.get('/', function(request, response){
	response.render('index', {
		title: "Employee Management System (EMS)",
		message: "The EMS web application will allow you to add, edit, and remove employee records."
	});
});

// Process the get request from the employee list page and return a response.
app.get('/list', function(request, response){
	response.render('list', {
		title: "Employee Records",
		message: ""
	});
});

// Process the get request from the new employee creation page and return a response.
app.get('/new', function(request, response){
	response.render('new', {
		title: "Create Employee Record",
		message: "Please complete the following fields."
	});
});

// Process the post request from the new employee creation page and return a response.
app.post('/new', function(request, response){
	response.render('new', {
		title: "Create Employee Record",
		message: "Please complete the following fields."
	});
});

// Process the get request from the employee view page and return a response.
app.get('/view/:employeeId', function(request, response){
	// Store the employee id retrieved from the URL
	var employeeId = parseInt(request.params.employeeId, 10);

	response.render('view', {
		title: "Employee Record Details",
		message: 'Employee ID: ' + employeeId,
		employeeId: employeeId
	});
});

// Process the get request from the employee edit page and return a response.
app.get('/edit/:employeeId', function(request, response){
	// Store the employee id retrieved from the URL
	var employeeId = parseInt(request.params.employeeId, 10);

	response.render('edit', {
		title: "Edit Employee Record Details",
		message: 'Employee ID: ' + employeeId,
		employeeId: employeeId,
		firstName: "April",
		lastName: "Auger",
		dateOfBirth: "1977-07-27",
		address: "4585 Broadway",
		city: "Folsom",
		state: "CA",
		zip: "95868",
		phone: "(916) 586-4585",
		department: "Information Technology",
		position: "Web Developer",
		hireDate: "2001-12-01"
	});
});

// Process the get request from the deletion confirmation page and return a response.
app.get('/delete/:employeeId', function(request, response){
	// Store the employee id retrieved from the URL
	var employeeId = parseInt(request.params.employeeId, 10);

	response.render('delete', {
		title: "Confirm Deletion",
		message: 'Employee ID: ' + employeeId,
		employeeId: employeeId
	});
});

// Process the get request from the about page and return a response.
app.get('/about', function(request, response){
	response.render('about', {
		title: "About",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	});
});

// Get request from the list page and return a response.
app.get('/contact', function(request, response){
	response.render('contact', {
		title: "Contact",
		message: "If you have questions, please complete and send our contact form."
	});
});