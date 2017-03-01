//Dependencies
import $ from "jquery";
import jQueryBridget from "jquery-bridget";
import Isotope from "isotope-layout";
//make isotope work with jquery in imports
$.bridget( 'isotope', Isotope );

//Module imports
import { debug } from "./modules/debug";
import { grid } from "./modules/grid";
import { konami } from "./modules/konami-code";


$(document).ready(function() {

	debug('document ready')

	let $header = $('.header'),
	$navTrigger = $('.nav-trigger img'),
	$portfolioPiece = $('.portfolio-piece')

	$navTrigger.click(function () {
		$(this).toggleClass('active')
		$header.toggleClass('active')
		debug("toggle header");
	})
	
	grid();
	konami();
});