// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('a.page-scroll-sm').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top + 100)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});



// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 120
    }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

//    $('.masthead').affix({
//        offset: {
//            top: 80
//        }
//    });

$(document).click(function (event) {
  var clickover = $(event.target);
  var $navbar = $(".navbar-collapse");               
  var _opened = $navbar.hasClass("in");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
    $navbar.collapse('hide');
  }
}); 

$('.navbar-toggle').click(function (event) {
  var $navbar = $("#mainNav");     
  $navbar.toggleClass('darkcolor');          
}); 




$(".ioticont-dev").hover(function() {
$( '.ioticont-dev img' ).attr("src","img/iotxpand-icon-dev-light.png");
}, function() {
  $( '.ioticont-dev img' ).attr("src","img/iotxpand-icon-dev.png");
});

$(".ioticont-enter").hover(function() {
$( '.ioticont-enter img' ).attr("src","img/iotxpand-icon-enterprise-light.png");
}, function() {
  $( '.ioticont-enter img' ).attr("src","img/iotxpand-icon-enterprise.png");
});


$(".ioticont-dev.active").hover(function() {
$( '.ioticont-dev img' ).attr("src","img/iotxpand-icon-dev-light.png");
}, function() {
  $( '.ioticont-dev img' ).attr("src","img/iotxpand-icon-dev-light.png");
});

$(".ioticont-enter.active").hover(function() {
$( '.ioticont-enter img' ).attr("src","img/iotxpand-icon-enterprise-light.png");
}, function() {
  $( '.ioticont-enter img' ).attr("src","img/iotxpand-icon-enterprise-light.png");
});


$(".btndev").on("mouseover", function() {
    $(".particles-dev, .copy-dev").show();
    $("#particles-js, .copy-standard").hide();
}).on("mouseout", function() {
    $(".particles-dev, .copy-dev").hide();
    $("#particles-js, .copy-standard").show();
});

$(".btnenter").on("mouseover", function() {
    $(".particles-enter, .copy-enter").show();
    $("#particles-js, .copy-standard").hide();
}).on("mouseout", function() {
    $(".particles-enter, .copy-enter").hide();
    $("#particles-js, .copy-standard").show();
});

//Back2Top
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 300) jQuery("#backtotop").fadeIn();
    else jQuery("#backtotop").fadeOut();
  });

  jQuery("#backtotop").click(function() {
    jQuery("body,html").animate({
      scrollTop: 0
    }, 800);

    return false;
});


$(".regular").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
 });

 $('.tabbed-btn[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.regular').slick('slickGoTo', slideno - 1);
 });

//remove active class from all thumbnail slides
 $('.tabbed-btn').removeClass('active');

 //set active class to first thumbnail slides
 $('.tabbed-btn').eq(0).addClass('active');

 // On before slide change match active thumbnail to current slide
 $('.regular').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.tabbed-btn').removeClass('active');
  $('.tabbed-btn').eq(mySlideNumber).addClass('active');
});



 $(".newregular").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  adaptiveHeight: true
 });

 $('.tabbed-btn2[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.newregular').slick('slickGoTo', slideno - 1);
 });

//remove active class from all thumbnail slides
 $('.tabbed-btn2').removeClass('active');

 //set active class to first thumbnail slides
 $('.tabbed-btn2').eq(0).addClass('active');

 // On before slide change match active thumbnail to current slide
 $('.newregular').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.tabbed-btn2').removeClass('active');
  $('.tabbed-btn2').eq(mySlideNumber).addClass('active');
});




