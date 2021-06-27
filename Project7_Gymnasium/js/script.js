// ============================
//     Banner PLugin section 
// ============================
$('.banner_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
	prevArrow: '<i class="fa fa-angle-left left_arrow" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-right right_arrow" aria-hidden="true"></i>',
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});
// ======================================
//      About Us + Gallery Venobox
// ======================================
$('.venobox').venobox(); 
// ============================
//     Testimonial PLugin section 
// ============================
$('.testi_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});
// ============================
//     Counter UP PLugin
// ============================
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ============================
//      Color Tab PLugin
// ============================
$("#colorful").colorfulTab(); 
// ====================================================
// 		    Brand Plugin Start
// ====================================================
$('.sponsor_slider').slick({
    dots: false,
    arrows: false,
	autoplay: false,
	autoplaySpeed: 600,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});
