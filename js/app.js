

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


// let casesBtn = document.querySelector('.inner-cases__btn a');
// let casesInner = document.querySelector('.cases__content');

// more(casesBtn, casesInner, "БОЛЬШЕ КЕЙСОВ", "МЕНЬШЕ КЕЙСОВ");



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
	simulateTouch: false,
	speed: 300,
	navigation: {
		nextEl: '.book__slider-next',
		prevEl: '.book__slider-prev',
	},
	pagination: {
		el: '.swiper-pagination',

	},
	breakpoints: {

		768: {
			autoHeight: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 30,
			speed: 0,
		},

	}

})



const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
const iframe = document.querySelectorAll('video');

if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			iframe.forEach(function (item) {
				item.pause()
			})
			e.preventDefault();
		});
	}
}



function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();



