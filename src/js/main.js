import $ from "jquery";
// import Prism from "prismjs";
import "isotope-layout";
import { debug } from "./modules/debug";
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

	konami();
});