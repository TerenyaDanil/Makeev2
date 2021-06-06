
var swiper = new Swiper('.rev__slider', {
	loop: true,
	spaceBetween: 100,
	grabCursor: true,
	autoHeight: true,
	simulateTouch: true,
	centeredSlides: true,
	slidesPerView: 1,
	speed: 600,
	navigation: {
		nextEl: '.rev__slider-next',
		prevEl: '.rev__slider-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {

		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},

	}

})

var swiper = new Swiper('.book', {
	loop: true,
	spaceBetween: 1000,
	slidesPerView: 1,
	speed: 0,
	navigation: {
		nextEl: '.book__slider-next',
		prevEl: '.book__slider-prev',
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

let more = function (btn, inner, textOne, textTwo) {
	btn.onclick = function () {
		console.log(123);
		if (btn.innerText == textOne) {
			btn.innerText = textTwo;
		} else {
			btn.innerText = textOne;
		}
		inner.classList.toggle("active");
	};
}

let dopBtn = document.querySelector('.dop__btn a');
let dopInner = document.querySelector('.dop__inner');

more(dopBtn, dopInner, "ОТКРЫТЬ", "СКРЫТЬ");



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



