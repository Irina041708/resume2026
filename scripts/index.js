const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const themePage = document.querySelector('.theme');
const themeToggle = document.querySelector(".theme__toggle");

themeToggle.addEventListener('click', () => {
	if(themePage.classList.contains('theme--light')) {
		themePage.classList.remove('theme--light');
		themePage.classList.add('theme--dark');
	} else {
		themePage.classList.remove('theme--dark');
		themePage.classList.add('theme--light');
	}
});


// themeSwitchers.forEach(switcher => {
// 	switcher.addEventListener('click', function() {
// 		applyTheme(this.dataset.theme);
// 	});
// });

// function applyTheme(themeName) {
// 	let themeUrl = `css/theme-${themeName}.css`;
// 	document.querySelector('[title=theme]').setAttribute('href', themeUrl);
// }
