import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// Бургер

const button = document.querySelector('.header__burger');

const menu = document.querySelector('.header__list');
const phone = document.querySelector('.header__phone');
const logo = document.querySelector('#logo');
const box = document.querySelector('.header__box');

const open = () => {
  button.classList.remove('header__burger-close');
  button.classList.add('header__burger-open');
  menu.style.display = 'flex';
  phone.style.color = '#000000';
  logo.src = '/img/logo-black.png';
  box.style.background = '#ffffff';
};

const close = () => {
  button.classList.remove('header__burger-open');
  button.classList.add('header__burger-close');
  menu.style.display = 'none';
  phone.style.color = '#ffffff';
  logo.src = '/img/logo.png';
  box.style.background = '#ffffff00';
};

button.addEventListener('click', ()=> {
  if (button.classList.contains('header__burger-close')) {
    open();
  } else {
    close();
  }
});

// Слайдер Hero

const swiperHero = new Swiper('.hero__swiper', {
  slidesPerView: 1,
//   slidesPerGroup: 1,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Видео экскурсия

const videoButton = document.querySelector('#video-button');
const videoImg = document.querySelector('#video-img');
const video = document.querySelector('#video');
const videoPlayer = document.querySelector('#video-player');

videoButton.addEventListener('click', ()=> {
  videoImg.style.display = 'none';
  videoPlayer.style.display = 'block';
  video.src += '?autoplay=1';
});

// Слайдер Туры

const swiperTours = new Swiper('.tours__wrapper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 45,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});
