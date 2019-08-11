/*
============================================
; Title:  auger-exercise-1.5.js
; Author: April Auger
; Date:   20 August 2019
; Description: Hello world assignment with node server.
;===========================================
*/

// Required modules
const http = require('http');
const header = require("../header.js");

// Start program

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 1.3") + '\n');

// processRequest function
function requestHandler(request, response) {

	var body = "My first web server with node.js.";

    var contentLength = body.length;

    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    response.end(body);

}

var server = http.createServer(requestHandler);

server.listen(8080);

// End program