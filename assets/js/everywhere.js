//slider text scale
var slitertext_top = ($('#slider1').height() - $('.slider-text').height())/2;
function slide_text_position(){
	var slitertext_topnow = window.slitertext_top + $(document).scrollTop()/1.5;
	$('.slider-text').css('top', slitertext_topnow);
}
function slide_bg_position(){
	var sliterimg_topnow = $(document).scrollTop()/2;
	$('#slider1').css('background-position', '0 '+sliterimg_topnow);
	var sliterimg2_topnow = $(document).scrollTop()/2 - $('#slider1').height() - $('#about-box').height();
	$('#slider2').css('background-position', '0 '+sliterimg2_topnow);
}
slide_bg_position();

$(function(){
	if(window.innerWidth > 991){
		if($(document).scrollTop() < window.innerHeight/2){
			slide_text_position();
		} else{
			$('.slider-text').css('top', ($('#slider1').height() - window.innerHeight/3.5));
		}
	} else{
		$('.slider-text').css('top', ($('#slider1').height() - $('.slider-text').height())/2);
	}
});

//zmiana kolory nav
function navbar_color(){
	if(window.innerWidth < 992){
		if($(document).scrollTop() > window.innerHeight/3){
		//scrolled
		$('nav').css({
			'background' : 'black'
		});
		$('#logo').css({
			'font-size' : '33px;'
		});
		} else{
			//top
			$('nav').css({
				'background' : 'transparent'
			});
			$('#logo').css({
				'font-size' : '3rem'
			});
		}
	} else{
		if($(document).scrollTop() > window.innerHeight/1.5){
			//scrolled
			$('nav').css({
				'background' : '#10100f'
			});
			$('#logo').css({
				'font-size' : '33px'
			});
		} else{
			//top
			$('nav').css({
				'background' : 'transparent'
			});
			$('#logo').css({
				'font-size' : '3rem'
			});
		}
	}
}


//animacje obiektow
function objects_animate(){
	if($(document).scrollTop()+250 > $('#a_equipment').offset()['top']){
		$('#model3').css({
			'opacity' : 1
		});
	}
	if($(document).scrollTop()+250 > $('#a_games').offset()['top']){
		$('#model2').css({
			'opacity' : 1
		});
	}
}

//window strolling events
$(window).scroll(
	function(){
		if(window.innerWidth > 992){
			if($(document).scrollTop() < window.innerHeight/2){
				slide_text_position();
			}
		}
		slide_bg_position();
		navbar_color();
		objects_animate();
	}
);

//Linki a name href instrona
$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-60
    }, 500, 'swing');

    return false;
});

//menu czarne mobilka
$('.navbar-toggler').click(
	function(){
		if(window.innerWidth < 992){
			if($(document).scrollTop() < window.innerHeight/3){
				if($('nav').css('background') == "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"){
					$('nav').css({
						'background' : 'black'
					});
					$('#logo').css({
						'font-size' : '1.5rem'
					});
				} else{
					$('nav').css({
						'background' : 'transparent'
					});
					$('#logo').css({
						'font-size' : '3rem'
					});
				}
				
			}
		}
	}
);

//portfolio zoom
$('.portfolio-img').click(
	function(){
		$("#img-zoom").css("backgroundImage",$(this).css('backgroundImage'));
		$("#img-zoom-box").fadeIn();
	}
);
$('#img-zoom-box').click(
	function(){
		$("#img-zoom-box").fadeOut();
		$("#img-zoom").css("backgroundImage",'unset');
	}
);