import $ from "jquery";
// import Prism from "prismjs";
import { debug } from "./debug";
import { konami } from "./konami-code";

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