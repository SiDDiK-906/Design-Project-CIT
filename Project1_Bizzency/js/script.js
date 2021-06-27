  //  ===================================
  //              jQuery
  //  ===================================
//  ===================================
  //      jQuery of menu bar part
  //  ===================================
$(".menubutton").click(function(){
	$(".toggle").fadeToggle()
})
  //  ===================================
  //      jQuery of search icon part
  //  ===================================
$(".srch").click(function(){
	$(".totalClose").fadeIn()
})
$(".close").click(function(){
	$(".totalClose").fadeOut()
})
  //  ===================================
  //      Slick Slider part Start
  //  ===================================
$('.all_item').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 800,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
  //  ===================================
  //      Progress Bar part Start
  //  ===================================
  $('#jq').LineProgressbar({
  percentage:90,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(42, 72, 150)',
  });
  $('#html').LineProgressbar({
  percentage:85,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(93, 59, 21)',
  });
  $('#css').LineProgressbar({
  percentage:75,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(52, 74, 31)',
  });
  $('#photoshop').LineProgressbar({
  percentage:80,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: 'rgb(57, 41, 96)',
  });
  //  ===================================
  //          Blog part Start
  //  ===================================

  $('.allblogitem').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  });
  //  ===================================
  //        Testimonial part Start
  //  ===================================
  $('.alltestiitem').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"> <i class="fa fa-angle-left " aria-hidden="true"></i> </div>',
    nextArrow: '<div class="next"> <i class="fa fa-angle-right " aria-hidden="true"></i> </div>',
  });
  //  ===================================
  //        Service part Start
  //  ===================================
  $('.allserviceitem').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  //  ===================================
  //      footer top to up button part
  //  ===================================

// $(Document).ready(function(){

//   $(".topicon").click(function(){
//     $('html ,body').animate({scrollTop: 0},800);

//   })
// })