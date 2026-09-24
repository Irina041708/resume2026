// eslint-disable-next-line check-file/filename-naming-convention
const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
// 1. Находим все ссылки в меню
const navLinks = document.querySelectorAll(".site-list__navigation-link");

// 1. Создаем функцию-проверку: истинно, если ширина экрана <= 375px
const isMobile = () => window.matchMedia("(max-width: 375px)").matches;

navMain.classList.remove("main-nav--nojs");

// 2. При загрузке страницы: если экран большой, принудительно открываем меню
if (!isMobile()) {
  navMain.classList.remove("main-nav--closed");
  navMain.classList.add("main-nav--opened");
}

navToggle.addEventListener("click", () => {
  // 3. Если экран не мобильный — прерываем функцию, ничего не делаем
  if (!isMobile()) return;

  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // 4. Если экран не мобильный — прерываем функцию, меню не закроется
    if (!isMobile()) return;

    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  });
});

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', () => {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     // Принудительно закрываем меню
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   });
// });

// const locationStatic = document.querySelector('.location__img-map');

// locationStatic.classList.remove('location__img-map--js');

// locationStatic.classList.add('location__img-map--nojs');
