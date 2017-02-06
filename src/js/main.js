import $ from "jquery";
import { konami } from "./konami-code";
import { debug } from "./debug";


$(document).ready(function() {

	debug('document ready')

	let $header = $('.header'),
	$navTrigger = $('.nav-trigger img')

	$navTrigger.click(function () {
		$(this).toggleClass('active')
		$header.toggleClass('active')
		debug("toggle header");
	})

	konami();



});