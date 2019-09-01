/*
============================================
; Title:  Assignment 4.4
; Author: April Auger
; Date:   31 August 2019
; Description: Demonstrates how CRUD operations.
;===========================================
*/

// Required Modules
var express = require("express");
var http = require("http");
var logger = require("morgan");
var header = require("../../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Assignment 4.4") + '\n');

// Variable storing a new Express application
var app = express();

// Use morgan for logging
app.use(logger('dev'));

// Get request
app.get("/", function(request, response) {
  response.send("HTTP GET request was successful.");
});

// Put request
app.put("/", function(request, response) {
  response.send("HTTP PUT request was successful.");
});

// Post request
app.post("/", function(request, response) {
  response.send("HTTP POST request was successful.");
});

// Delete request
app.delete("/", function(request, response) {
  response.send("HTTP DELETE request was successful.");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

// End program