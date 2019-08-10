/*
============================================
; Title:  auger-exercise-1.3.js
; Author: April Auger
; Date:   9 August 2019
; Description: Module used to parse a URL.
;===========================================
*/
// Required modules
var url = require('url');
var header = require("../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 1.3") + '\n');

// Variable
var parseUrl = url.parse('https://www.mysite.com/user?name=auger');

// Console log output
console.log(parseUrl.protocol);
console.log(parseUrl.host);
console.log(parseUrl.query);

// End program