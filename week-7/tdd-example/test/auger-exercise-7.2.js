/*
============================================
; Title:  auger-exercise-7.2.js
; Author: April Auger
; Date:   20 September 2019
; Description: TDD application used to demonstrate
;              how to use mocha and chai to test code.
;===========================================
*/

// Start program

// Required modules
var header = require("../../../header.js");
var assert = require("assert");

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 7.2") + '\n');

// The test code
// Describes the specifications
describe("String#split", function() {
	it("should return an array of fruits", function() {
		assert(Array.isArray("Apple,Orange,Mango".split(",")));
	});
});

// The function that will be tested
function getFruits(str) {
	return str.split(",");
}

// Make this file available to other modules
module.exports = getFruits;

// End program