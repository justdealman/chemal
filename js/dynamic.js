function scene() {
	$('.scene li').each(function() {
		var aw = $('body').width();
		var ah = $('body').height();
		var ar = aw/ah;
		var iw = $(this).find('img').attr('width');
		var ih = $(this).find('img').attr('height');
		var ir = iw/ih;
		if ( ar > ir ) {
			var nw = aw*1.2;
			var nh = nw/ir;
			var il = -$('body').width()*0.1;
			var it = -(nh-ah)/2;
		}
		else {
			var nh = ah*1.2;
			var nw = ah*ir*1.2;
			var il = -((nw-aw)/2)+eval($('body').width()*0.1);
			var it = 0;
		}
		$(this).find('img').css({
			'margin-left': il+'px',
			'top': it+'px',
			'width': nw+'px',
			'height': nh+'px'
		});
		$('.layer1').css({'margin-top': -(nh-ah)/10+'px'});
		$('.layer2').css({'margin-top': -(nh-ah)/2.5+'px'});
		$('.layer3').css({'margin-top': -(nh-ah)/1.5+'px'});
	});
	$('.scene li .level1').css({'top': '82px'});
	$('.scene li .level3').css({'top': '-82px'});
}
function map() {
	var h = $('.wrapper').height();
	var path = $('.map script').attr('src')+h;
}
$(window).resize(function() {
	map();
});
$(document).ready(function() {
	map();
});
$(document).ready(function() {
	$('.list li a').each(function() {
		var ph = $(this).find('p').height();
		if ( ph == 24 ) {
			$(this).find('p').css({'margin-top': '12px'});
		}
	});
	$('.symlist li div').each(function() {
		var ph = $(this).find('p').height();
		if ( ph == 16 ) {
			$(this).find('p').css({'padding-top': '10px'});
		}
	});
	$('.gallery').each(function() {
		var tabs = $(this).children('div');
		$(this).find('ul li a').click(function () {
			tabs.hide();
			tabs.filter(this.hash).stop(true, true).fadeIn(150);
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.description').each(function() {
		var tabs = $(this).children('div');
		$(this).find('ul li a').click(function () {
			tabs.hide();
			tabs.filter(this.hash).stop(true, true).fadeIn(150);
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	});
	if ( $('.jcarousel').length > 0 ) {
		$('.jcarousel').jcarousel({
			scroll: 1,
			animation: 150,
			easing: 'easeInOutQuart'
		});
	}
	$('.main .images').each(function() {
		var img = $(this).find('.big img');
		$(this).find('.jcarousel-item a').click(function () {
			img.hide();
			img.filter(this.hash).stop(true, true).fadeIn(150);
			return false;
		}).filter(':first').click();
	});
	$('.symbols').bind('click', function() {
		if ( $('.symlist').is(':visible') ) {
			$('.symlist').stop(true, true).slideUp(500, 'easeInOutQuart');
		}
		else {
			$('.symlist').stop(true, true).slideDown(500, 'easeInOutQuart');
		}
		return false;
	});
	$('.symlist').append('<span class="close"></span>');
	$('.symlist .close').bind('click', function() {
			$('.symlist').stop(true, true).slideUp(500, 'easeInOutQuart');
		return false;
	});
	if ( $('.scene').length > 0 ) {
		$('.scene').parallax({
			scalarY: '0'
		});
		scene();
	}
});
$(window).resize(function() {
	if ( $('.scene').length > 0 ) {
		scene();
	}
});