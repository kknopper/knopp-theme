import $ from "jquery";
import { debug } from "./debug";

function grid() {
	let $grid = $('.portfolio-grid')

	$grid.isotope({
  		itemSelector: '.portfolio-piece',
  		layoutMode: 'fitRows'
	})
}

export { grid };