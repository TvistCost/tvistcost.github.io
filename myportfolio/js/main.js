// popup-zoom
$(document).ready(function () {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
});

// slick
  const slidesCount = $('.comment-customer-items').length;
	$('.comment-customer').slick({
    prevArrow:
      '<button type="button" class="comment-slick-prev comment-slick-btn"><i class="icon-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="comment-slick-next comment-slick-btn"><i class="icon-arrow-right"></i></button>',
    dots: true,
    slidesToShow: 4,
    dots: 4 < slidesCount,
    responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 1,
        dots: 3 < slidesCount,
      }
    }
  ]
});
