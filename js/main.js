$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		$('.mobile-menu').addClass('active');
		$('body').addClass('no-scroll');
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(this).attr('data-scroll-offset');
		if ($(el).length){
			if (des){
				$('body,html').animate({scrollTop: $(el).offset().top - des}, 800);
			} else {
				$('body,html').animate({scrollTop: $(el).offset().top}, 800);
			}
		}
		return false;
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.b-face-slider').slick({
		arrows: false,
		dots: true
	});

	$('.b-products-slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.images-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.images-nav'
	});
	$('.images-nav').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.images-slider',
		focusOnSelect: true
	});

	$(document).on('click',function(e){
		var $btn = $(e.target);

		if ( !$btn.closest('.sort-sel').length ){
			$('.sort-sel').removeClass('active');
		}

		if ( !$btn.closest('.filter-sel').length ){
			$('.filter-sel').removeClass('active');
		}
	});

	$(document).on('click','.search-btn',function(){
		$(this).parents('.header-main').find('.header-main-left').toggleClass('active');
	});

	$(document).on('click','.mobile-menu .nav-drop span',function(){
		$(this).parent().toggleClass('active');
	});

	$(document).on('click','.mobile-menu-overlay',function(){
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$(document).on('click','.b-filter .item .name, .filter-sel .sel-drop .body .item .name',function(){
		$(this).parent('.item').toggleClass('active');
	});

	$(document).on('click','.sort-sel .btn',function(){
		$(this).parents('.sort-sel').toggleClass('active');
	});

	$(document).on('click','.sort-sel .list li',function(){
		var text = $(this).text();
		if ( !$(this).hasClass('active') ){
			$(this).parent('.list').find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.sort-sel').find('.btn span').text(text);
		}
		$(this).parents('.sort-sel').removeClass('active');
	});

	$(document).on('click','.filter-sel .btn',function(){
		$(this).parents('.filter-sel').toggleClass('active');
	});

	$(document).on('click','.sel-drop .close, .sel-drop .filter-btn', function(){
		$(this).parents('.filter-sel').removeClass('active');
		return false;
	});

	$(document).on('click','.swap-vol > li',function(){
		if ( !$(this).hasClass('active') ){
			$(this).parent('.swap-vol').find('li').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.zoom-img').on('mouseleave',function(){
		$(this).css('transform','scale(1)');
	});
	$('.zoom-img').on('mousemove',function(){
		if ($(window).width() > 768){
			var pos = {};
			pos.centerX = $(this).parent().outerWidth()/2;
			pos.centerY = $(this).parent().outerHeight()/2;
			pos.mouseX = event.pageX - $(this).parent().offset().left;
			pos.mouseY = event.pageY - $(this).parent().offset().top;
			var moveX = (pos.centerX - pos.mouseX)/2;
			var moveY = (pos.centerY - pos.mouseY)/2;

			$(this).css('transform','scale(2) translate('+moveX+'px, '+moveY+'px)');
		}
	});

	$(document).on('click','.b-hidden-texts > li .btn', function(){
		var elem_height = $(this).parent('li').find('.text-wrap .text').outerHeight();
		if ( $(this).parent('li').hasClass('active') ){
			$(this).parent('li').removeClass('active');
			$(this).parent('li').find('.text-wrap').animate({'height': 0}, 500);
		} else {
			$(this).parent('li').addClass('active');
			$(this).parent('li').find('.text-wrap').animate({'height': elem_height}, 500);
		}
	});

	function SizeText(){
		$('.b-hidden-texts').each(function(){
			$(this).find('li.active').each(function(){
				var elem_height = $(this).find('.text-wrap .text').outerHeight();
				$(this).find('.text-wrap').height(elem_height);
			});
		});
	}
	SizeText();

	function MobileFilter(){
		var ww = $(window).width();

		if ($('.b-filter-wrap').length && $('.filter-sel').length){
			if (ww > 1024){
				var filter = $('.filter-sel .sel-drop .body').html();
				if (filter){
					$('.b-filter-wrap').html(filter);
					$('.filter-sel .sel-drop .body').html('');
				}
			} else {
				var filter = $('.b-filter-wrap').html();
				if (filter){
					$('.b-filter-wrap').html('');
					$('.filter-sel .sel-drop .body').html(filter);
				}
			}
		}
	}
	MobileFilter();

	$(window).resize(function(){
		MobileFilter();
		SizeText();
	});

});