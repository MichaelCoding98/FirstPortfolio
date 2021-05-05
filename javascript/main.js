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
lightDark.addEventListener('click', () => {
	lightMain.toggleAttribute('disabled');
    lightDark.classList.toggle('light-dark-toggle')
});

// const toggleSwitch = document.getElementById('checkbox');
// const currentTheme = localStorage.getItem('data-theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('data-theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('data-theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

// const lightToggle = document.querySelector('.light-dark');
// let lightMain = document.querySelector('.light-main');
// let darkMode = localStorage.getItem('light-main');

// const enableDarkMode = () => {
// 	lightToggle.classList.add('light-dark-toggle');

// 	localStorage.setItem('darkMode', null);

// };

// const disableDarkMode = () => {
// 	lightToggle.classList.remove('light-dark-toggle');

// 	localStorage.setItem('darkMode', 'enabled');
// };

// lightToggle.addEventListener('click', () => {
// 	darkMode = localStorage.getItem('darkMode');

// 	if (darkMode === 'enabled') {
// 		enableDarkMode();
// 		lightMain.setAttribute('disabled', true);
// 	} else if (darkMode === null) {
// 		disableDarkMode();
// 		lightMain.setAttribute('disabled', false);
// 	}
// });
