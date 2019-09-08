/*
============================================
; Title:  scripts.js
; Author: April Auger
; Date:   8 September 2019
; Description: Script file used for header effects.
;===========================================
*/

$(document).ready(function () {
	'use strict';

	// Menu background on scroll
	$(document).scroll(function () {
		var $nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
