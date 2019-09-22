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

	// Set active menu item
	$(function($) {
		var href = window.location.href;
		$('ul.nav a').each(function() {
			if (this.href === href) {
				$(this).addClass('active');
			}
		});
	});

});
