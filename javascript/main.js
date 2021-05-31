const burgerBtn = document.getElementById('hamburger');
const changeIcon = true;
const navBtn = document.querySelector('.hamburger');
const lightDark = document.querySelector('.light-dark');
let lightMain = document.querySelector('.light-main');
const footerYear = document.querySelector('.year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

burgerBtn.addEventListener('click', function () {
	var overlay = document.querySelector('.overlay');
	var nav = document.querySelector('nav');

	overlay.classList.toggle('menu-open');
	nav.classList.toggle('menu-open');
});

navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('is-active');
});




let darkMode = localStorage.getItem('darkMode');
let count = 0;

lightDark.addEventListener('click', () => {
	if (count === 0) {
		lightDark.classList.add('light-dark-toggle');
		lightMain.setAttribute('disabled', true);
		localStorage.setItem('darkMode', 'enabled');
		count++;
	}else{
		lightMain.removeAttribute('disabled');
		lightDark.classList.remove('light-dark-toggle')
		localStorage.setItem('darkMode', null);	
		count = 0;
	}
});
if (darkMode === 'enabled') {
	lightMain.setAttribute('disabled', true);
	lightDark.classList.add('light-dark-toggle');
	count = 1
}




// // check for saved 'darkMode' in localStorage
// let darkMode = localStorage.getItem('darkMode');

// const darkModeToggle = document.querySelector('#dark-mode-toggle');

// const enableDarkMode = () => {
// 	// 1. Add the class to the body
// 	document.body.classList.add('darkmode');
// 	// 2. Update darkMode in localStorage
// 	localStorage.setItem('darkMode', 'enabled');
// };

// const disableDarkMode = () => {
// 	// 1. Remove the class from the body
// 	document.body.classList.remove('darkmode');
// 	// 2. Update darkMode in localStorage
// 	localStorage.setItem('darkMode', null);
// };

// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === 'enabled') {
// 	enableDarkMode();
// }

// // When someone clicks the button
// darkModeToggle.addEventListener('click', () => {
// 	// get their darkMode setting
// 	darkMode = localStorage.getItem('darkMode');

// 	// if it not current enabled, enable it
// 	if (darkMode !== 'enabled') {
// 		enableDarkMode();
// 		// if it has been enabled, turn it off
// 	} else {
// 		disableDarkMode();
// 	}
// });
