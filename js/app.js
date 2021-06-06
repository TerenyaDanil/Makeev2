
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
	spaceBetween: 100,
	slidesPerView: 1,
	autoHeight: true,
	simulateTouch: false,
	speed: 0,
	navigation: {
		nextEl: '.book__slider-next',
		prevEl: '.book__slider-prev',
	},
	pagination: {
		el: '.swiper-pagination',

	},
	breakpoints: {

		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

	}

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



burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}




const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 10;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}































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



