/*! The Good Man */

/*! jquery.fullscreen 1.1.0 - http://github.com/kayahr/jquery-fullscreen-plugin */
function d(b){var c,a;if(!this.length)return this;c=this[0];c instanceof Document?(a=c,c=a.documentElement):a=c.ownerDocument;if(null==b){if(!a.cancelFullScreen&&!a.webkitCancelFullScreen&&!a.mozCancelFullScreen)return null;b=!!a.fullScreen||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!b?b:a.fullScreenElement||a.webkitCurrentFullScreenElement||a.mozFullScreenElement||b}b?(b=c.requestFullScreen||c.webkitRequestFullScreen||c.mozRequestFullScreen)&&b.call(c):(b=a.cancelFullScreen||a.webkitCancelFullScreen||
a.mozCancelFullScreen)&&b.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");document.addEventListener(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))},!0);
document.addEventListener(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))},!0);

$(document).ready(function() {

	/* toggle fullscreen */
	$('.fs').toggle($(document).fullScreen() != null).click(function() {
		$(document).toggleFullScreen()
	});

	/* play */
	var audio = $('audio')[0];
	var animation = $('article');
	$('.play p').click(function() {
		$('h1').addClass('hide');
		$('.play, .mn').fadeOut(900);
		$('aside').fadeIn().addClass('sup').css('display','table');
	});
	$('.go').click(function() {
		audio.play();
		animation.css('display','block');
		$('aside').removeClass('sup').addClass('hide').fadeOut(900);
		$('body').addClass('bg');
		
		/* vanish */
		setTimeout(function(){$('h2, h3, .enemys').remove();},10000);
		setTimeout(function(){$('.good').remove();},13200);
		setTimeout(function(){$('.plus em, .plus b').remove();},17600);
	});

	/* random enemys */
	$('.enemys').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});
});

$(window).load(function() {
	$('.play p').fadeIn(1200);
	$('.play span').fadeOut(700);
});