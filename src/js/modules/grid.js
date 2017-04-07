import $ from "jquery";
import { debug } from "./debug";
import mixitup from 'mixitup';
import imagesLoaded from 'imagesloaded';
imagesLoaded.makeJQueryPlugin($);
// import mojs from 'mo-js';
// jQuery.ready(function() {
// 	console.log('add filterizr')
// 	require('filterizr');
// })

function grid() {
	let $grid = $('.portfolio-grid'),
	$gridItemImg = $('.portfolio-piece img'),
    $gridItem = $('.portfolio-piece'),
    $gridExpansions = $('.portfolio-piece-expansion'),
    $overlayClose = $('.overlay-close'),
    $overlay = $('.overlay'),
    $overlayContent = $('.overlay-content'),
    $body = $('body'),
    $html = $('html');

    if ($grid.length > 0) {
      debug('Initiate Grid', 'success');

	   let mixer = mixitup($grid, {
    	   selectors: {
        	   target: '.portfolio-piece'
    	   },
    	   animation: {
        	   duration: 500
    	   }
	   });


       //TO DO function to recenter on mobile resize
       // function recalcCircleCenter($this) {
       //  let newTop = (($this.filter('active').find('.portfolio-piece-wrap').outerHeight() - $('.circle-overlay').outerHeight() * 0.25) / 2 + squareOffset.top + 'px');
       //  let newLeft = (($(this).find('.portfolio-piece-wrap').outerWidth() - $('.circle-overlay').outerWidth() * 0.25)  / 2 + squareOffset.left+ 'px');
       //  let newRadius = squareWidth * 0.25
       // }


        let circleOverlay = new mojs.Shape({
            shape: 'circle',
            isShowStart:  true,
            radius: 20,
            fill: '#96BDC6',
            // parent: '.portfolio-grid',
            className: 'circle-overlay',
            opacity: {0:1},
            duration: 400,
            delay: 300
        }).then({
            scale: { 0.5 : 50 },
            duration: 500,
        });


        $gridItem.click(function(e) {
            e.preventDefault();
            //remove currecnt active states
            $gridItem.removeClass('active');
            $(this).addClass('active');

            let squareWidth = $(this).find('.portfolio-piece-wrap').width() / 2;
            let squareOffset = $(this).find('.portfolio-piece-wrap').offset();

            let newTop = (($(this).find('.portfolio-piece-wrap').outerHeight() - $('.circle-overlay').outerHeight() * 0.25) / 2 + squareOffset.top + 'px');
            let newLeft = (($(this).find('.portfolio-piece-wrap').outerWidth() - $('.circle-overlay').outerWidth() * 0.25)  / 2 + squareOffset.left+ 'px');
            let newRadius = squareWidth * 0.25

            circleOverlay.tune({ left: newLeft, top: newTop, radius: newRadius }).play();

            let newHTML = $(this).find('.portfolio-piece-expansion').html();

            $overlay.addClass('active')
            $overlayContent.html(`<div class="container">${newHTML}</div>`);
            $html.addClass('noscroll')


        });

         $overlayClose.click(function() {
            $gridItem.removeClass('active');
            $overlay.removeClass('active')
            $overlayContent.html('');
            $html.removeClass('noscroll');
            circleOverlay.playBackward();
        });

        



        $grid.imagesLoaded(function() {
            debug('Grid images loaded');
        })
    }
}

export { grid };