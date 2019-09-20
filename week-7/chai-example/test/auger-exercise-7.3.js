/*
============================================
; Title:  auger-exercise-7.3.js
; Author: April Auger
; Date:   20 September 2019
; Description: Unit test code.
;===========================================
*/

// Start program

// Required modules
var header = require("../../../header.js");
var fruits = require("../fruits");
var chia = require("chai");
var assert = chia.assert; // Make assertions in tests

// Output the header to the console
console.log(header.display("April", "Auger", "Exercise 7.3") + '\n');

// Describes the specifications
describe("fruits", function(){
	it("should return an array of fruits",function(){
		var f = fruits("Apple,Orange, Mango");
		assert(Array.isArray(f));
	});
});

// End program