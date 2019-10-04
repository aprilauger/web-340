/*
============================================
; Title:  app.js
; Author: April Auger
; Date:   4 October 2019
; Description: Demonstrates how to create an
;			   employee management system using
;			   Express, EJS, and MongoDB.
;===========================================
*/

// Required modules
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require("helmet");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var header = require('./header.js');
var routes = require('./routes.js');

// Start program

// Output the header to the console
console.log(header.display('April', 'Auger', 'EMS Project - Milestone 5') + '\n');

// Setup CSRF protection
var csrfProtection = csrf({ cookie: true });

// Variable storing a new Express application
var app = express();

// Use statements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Protection against Cross-site Request Forgery
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

// Set the Content-Security-Policy in the HTTP Header
app.use(helmet.xssFilter());

// Database Connection String
var mongoDB = "mongodb+srv://aauger:wNoz7FuS2dYd2aHb@buwebdev-cluster-1-bzl71.mongodb.net/ems?retryWrites=true&w=majority";

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

// The application routes
app.use(routes);

// Set up a path to the assets directory
var assets = path.resolve(__dirname, "assets");

// Send static files from the assets directory
app.use('/assets', express.static(assets));

// Location of views folder
app.set('views', path.resolve(__dirname, 'views'));

// Use the EJS templating engine
app.set('view engine', 'ejs');

// Use morgan for advanced logging
app.use(logger('short'));

// Create a server and listen on port 8080
app.set("port", process.env.PORT || 8080);
http.createServer(app).listen(app.get("port"), function() {
	console.log("Application started on port " + app.get("port"));
});