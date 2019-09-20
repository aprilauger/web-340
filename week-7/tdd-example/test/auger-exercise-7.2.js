/*
============================================
; Title:  auger-exercise-7.2.js
; Author: April Auger
; Date:   20 September 2019
; Description: TDD application used to test code.
;===========================================
*/

// Required modules
var header = require("../../../header.js");

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 7.2") + '\n');

// Start program

// Required modules
var assert = require("assert");

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

module.exports = getFruits;

// End program