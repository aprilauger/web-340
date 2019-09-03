/*
============================================
; Title:  Exercise 5.3
; Author: April Auger
; Date:   3 September 2019
; Description: Demonstrates how to use Pug templates.
;===========================================
*/

// Required modules
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');
var header = require('../../header.js');

// Start program

// Output the header to the console
console.log(header.display('April', 'Auger', 'Exercise 5.3') + '\n');

// Variable storing a new Express application
var app = express();

// Location of views folder
app.set('views', path.resolve(__dirname, 'views'));

// App uses the Pug templating engine
app.set('view engine', 'pug');

// Get the request and return a response to index.pug
app.get('/', function(request, response){
	response.render('index', {
		message: 'This page was output using Express and the pug templating engine.'
	});
});

// Create a server and listen on port 8000
http.createServer(app).listen('8000', function(){
	console.log('Application started and listening on port 8000');
});

// End program