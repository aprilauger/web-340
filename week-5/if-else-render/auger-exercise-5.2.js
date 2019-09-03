/*
============================================
; Title:  Exercise 5.2
; Author: April Auger
; Date:   3 September 2019
; Description: Demonstrates how to use EJS templates.
;===========================================
*/

// Required modules
var express = require("express");
var http = require("http");
var path = require("path");
var header = require("../../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 5.2") + '\n');

// Variable storing a new Express application
var app = express();

// Location of views folder
app.set("views", path.resolve(__dirname, "views"));

// App uses the EJS templating engine
app.set("view engine", "ejs");

// Composer array
var composers = [
	"Bach",
	"Mozart",
	"Beethoven",
	"Verdi"
];

// Get the request and return a response to index.ejs
app.get("/", function(request, response){
	// Return a response to index.ejs
	response.render("index", {
		name: composers
	});
});

// Create a server and listen on port 3000
http.createServer(app).listen(3000, function(){
	console.log("Application started and listening on port 3000.");
});

// End program