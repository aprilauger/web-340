/*
============================================
; Title:  Exercise 6.3
; Author: April Auger
; Date:   10 September 2019
; Description: Demonstrates how to use Mongoose.
;===========================================
*/

// Require modules
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');
var header = require("../../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 6.3") + '\n');

// Database Connection String
var mongoDB = 'mongodb+srv://aauger:wNoz7FuS2dYd2aHb@buwebdev-cluster-1-bzl71.mongodb.net/ems';

// Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useMongoClient: true});

// Promise
mongoose.Promise = global.Promise;

// Variable to hold database connection
var db = mongoose.connection;

// General error handling
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Display message once connected to the database
db.once('open', function() {
	console.log('Application connected to MongoDB Atlas');
});

// Variable storing a new Express application
var app = express();

// Use morgan for logging
app.use(logger('dev'));

// Start the server
http.createServer(app).listen(3000, function() {
	console.log('Application started and listening on port 3000');
});

// End program
