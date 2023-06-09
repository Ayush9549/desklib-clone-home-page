// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Show hide password
$(".pass i").click(function () {
	if($(this).hasClass('fa-eye'))
	{
		$(".pass i").addClass("fa-eye-slash").removeClass("fa-eye");
		$('.pass input').attr('type','text');
	}
	else
	{
		$(".pass i").addClass("fa-eye").removeClass("fa-eye-slash");
		$('.pass input').attr('type','password');
	}
});


// bus_mang
$(".bus_mang").hover(function () {
	$(".business_mang").css("display","block");
});
$(".container").hover(function(){
	$(".business_mang").css("display","none");
});


// slider
var swiper = new Swiper(".mySwiper", {
	slidePerView:1,
	centeredSlides: true,
	autoplay: {
	delay: 4000,
	// disableOnInteraction: false,
	},
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
});


// 2 slider
var swiper = new Swiper(".mySwiper2", {
loop: true,
slidesPerView: 4,
slidesPerGroup: 1,
spaceBetween: 30,
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
thumbs: {
swiper: swiper,
},
breakpoints: {
		100: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      },
});