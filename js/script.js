
$(function(){

'strict use';

// ========swiper================
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
 
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
});

// ====================manu FiX================

var manu = $('.main_manu').offset().top;
$(window).scroll(function(){

  var manufix = $(this).scrollTop();
  if( manufix > manu ){
    $('.main_manu').addClass('fixed');
  }
  else{
    $('.main_manu').removeClass('fixed');
  }
  
});

//============back top button======

// $(window).scroll(function () {
//   var scrolling2 = $(this).scrollTop();

//   if (scrolling2 > 150) {
//       $('.back-to-top').fadeIn();
//   } else {
//       $('.back-to-top').fadeOut()
//   }
// });


$('.b_t').click(function(){
  $('html, body').animate({
    scrollTop:0,
  });
});


$(window).scroll(function(){
  var scrollong = $(this).scrollTop();
if( scrollong > 200 ){
  $('.b_t').fadeIn();
}
else{
  $('.b_t').fadeOut();
}

});


//====================dj slider==================
  
$('.dj_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding:0,
  prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
});
			
//================final coundown==================

$('.year').countdown('2030/01/01', function(event) {
  $(this).html(event.strftime('%-Y Years'));
});

$('.month').countdown('2030/01/01', function(event) {
  $(this).html(event.strftime('%-n Month'));
});

$('.day').countdown('2030/01/01', function(event) {
  $(this).html(event.strftime('%-d Day'));
});

$('.hour').countdown('2030/01/01', function(event) {
  $(this).html(event.strftime('%-H hours'));
});

$('.minite').countdown('2030/01/01', function(event) {
  $(this).html(event.strftime('%-M Minite'));
});

$('.second').countdown('2030/01/01', function(event) {
  $(this).html(event.strftime('%-S Second'));
});

//=======================event slider======================

$('.event_banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
  responsive: [
         
         
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
   
  ]
});
	
//=======================blog slider======================

$('.blog_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
  responsive: [
         
         
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
   
  ]

});
//=======================testmonial slider======================

$('.kakka').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
  responsive: [
         
         
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
   
  ]
});
	
//=================

$(function() {
  $('audio').audioPlayer();
});

})


