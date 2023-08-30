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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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


// Слайдер Инструкторы

const swiperTraining = new Swiper('.training__item', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.st-button-next',
    prevEl: '.st-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});


// Слайдер отызвы

const swiperFeedback = new Swiper('.feedback__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.sf-button-next',
    prevEl: '.sf-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});


// Слайдер преимущества

let init = false;
let swiperAdvantages;
function swiperCard() {
  if (window.innerWidth >= 1200) {
    if (!init) {
      init = true;
      swiperAdvantages = new Swiper('.advantages__slider', {
        slidesPerView: 3.5,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.sa-button-next',
          prevEl: '.sa-button-prev',
        },
      });
    }
  } else if (init) {
    swiperAdvantages.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', () => {
  swiperCard();
});
window.addEventListener('load', () => {
  swiperCard();
});

// Слайдер фотогаллерея

const swiperPhotogallary = new Swiper('.photogallery__slider', {
  slidesPerView: 2,
  spaceBetween: 3,
  navigation: {
    nextEl: '.sp-button-next',
    prevEl: '.sp-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
      spaceBetween: 6,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 6,
    },
  },
});

// Маска

const phoneValid = document.querySelector('#phone');

if (phone) {
  IMask(
    phoneValid,
      {
        mask: '+{7}(000)000-00-00',
      }
  );
}

// Проверка на валидность формы

let input = document.querySelector('.questions__input-phone');
let form = document.querySelector('form');

const eventPhone = () => {

  let rules = input.dataset.rules;
  let value = input.value;
  let checkPhone;
  switch (rules) {
    case 'tel':
      checkPhone = /^([\+]?[7|8][\s-(]?[0-9]{3}[\s-)]?)?([\d]{3})[\s-]?([\d]{2})[\s-]?([\d]{2})$/.test(value);
      break;
  }
  if (!checkPhone || checkPhone.lenght === 0) {
    input.style.borderColor = '#FF121F';
    return false;
  } else {
    input.style.borderColor = '#0266c110';
    return true;
  }
};
let inputName = document.querySelector('.questions__input-name');

const eventName = () => {

  let name = inputName.dataset.name;
  let value = inputName.value;
  let checkName;
  switch (name) {
    case 'name':
      checkName = /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(value);
      break;
  }
  if (!checkName || checkName.lenght === 0) {
    inputName.style.borderColor = '#FF121F';
    return false;
  } else {
    inputName.style.borderColor = '#0266c110';
    return true;
  }
};

form.addEventListener('submit', (event) => {
  if (eventPhone() === false && eventName() === false) {
    event.preventDefault();
    return false;
  } else if (eventPhone() === false) {
    event.preventDefault();
    return false;
  } else if (eventName() === false) {
    event.preventDefault();
    return false;
  } else {
    event.preventDefault();
    form.submit();
    form.reset();
    return true;
  }
});
