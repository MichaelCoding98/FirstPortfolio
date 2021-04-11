const open = document.getElementById('hamburger');
const changeIcon = true;
const navBtn = document.querySelector('.hamburger');
const lightMain = document.querySelector('.light-main');
const lightToggle = document.querySelector('.light-dark');
const footerYear = document.querySelector('.year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

open.addEventListener('click', function () {
	var overlay = document.querySelector('.overlay');
	var nav = document.querySelector('nav');
	// var icon = document.querySelector('.menu-toggle i');

	overlay.classList.toggle('menu-open');
	nav.classList.toggle('menu-open');

	// if (changeIcon) {
	// 	icon.classList.remove('fa-bars');
	// 	icon.classList.add('fa-times');

	// 	changeIcon = false;
	// } else {
	// 	icon.classList.remove('fa-times');
	// 	icon.classList.add('fa-bars');
	// 	changeIcon = true;
	// }
});

navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('is-active');
});

lightToggle.addEventListener('click', () => {
	lightToggle.classList.toggle('light-dark-toggle')
	lightMain.toggleAttribute('disabled');
});
