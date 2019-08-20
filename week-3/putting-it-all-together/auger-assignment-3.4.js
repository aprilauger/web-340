/*
============================================
; Title:  auger-assignment-3.4.js
; Author: April Auger
; Date:   20 August 2019
; Description: Server configurations for routing
; 			   and navigation using an Express
;			   application.
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
console.log(header.display("April", "Auger", "Assignment 3.4") + '\n');

// Variable storing a new Express application
var app = express();

// Set the location for the views folder
app.set("views", path.resolve(__dirname, "views"));

// Set app to use the EJS templating engine
app.set("view engine", "ejs");

// Use the logger
app.use(logger("short"));

// Get a request and return a response to index.ejs
app.get("/", function(request, response) {
	response.render("index", {
		message: "Home Page"
	});
});

// Get a request and return a response to about.ejs
app.get("/about", function(request, response) {
	response.render("about", {
		message: "About Page"
	});
});

// Get a request and return a response to products.ejs
app.get("/products", function(request, response) {
	response.render("products", {
		message: "Product Page"
	});
});

// Get a request and return a response to contact.ejs
app.get("/contact", function(request, response) {
	response.render("contact", {
		message: "Contact Page"
	});
});

// Create a server and listen on port 8080
http.createServer(app).listen(8080, function() {
	console.log("Application started on port %s", 8080);
});

