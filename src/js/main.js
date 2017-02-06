import $ from "jquery";


$(document).ready(function() {

	const config = {};
	config.debug = true;
	
	//Console.logs only when debug set to true
	function debug(log) {
		if (config.debug) {
			console.log(log);
		}
	}
	debug('document ready')

	let $nav = $('.navbar'),
	$navTrigger = $('.nav-trigger img')

$navTrigger.click(function () {
	$nav.toggleClass('active')
	debug("test");
})



});