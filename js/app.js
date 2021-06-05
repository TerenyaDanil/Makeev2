var swiper = new Swiper('.rev__slider', {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	autoHeight: true,
	simulateTouch: true,
	centeredSlides: true,
	slidesPerView: 3,
	speed: 600,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},

})
const links = document.querySelectorAll("a.scroll-to");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}

let qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
	el.onclick = function () {
		el.classList.toggle("active");
		el.previousElementSibling.classList.toggle("active");
	}
});



// burger = document.querySelector('.header__burger');
// menu = document.querySelector('.header__nav');

// dark = document.querySelector('.bg-mob');

// burger.onclick = function () {
// 	burger.classList.toggle('active');
// 	dark.classList.toggle('active');
// 	menu.classList.toggle('active');
// }

// plus = document.querySelectorAll('.inner-qus__plus');

// for (const pluses of plus) {
// 	pluses.onclick = function () {
// 		pluses.classList.toggle('active');
// 		pluses.nextElementSibling.classList.toggle('active');

// 	}
// }


// more = document.querySelector('.program__btn');
// courseInner = document.querySelector('.inner-program-hide');



// more.onclick = function () {
// 	courseInner.classList.toggle('active');
// 	more.hidden = true;



