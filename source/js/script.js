// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';


// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();


const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

// Плавная анимация блока меню при первой загрузке главной страницы
document.addEventListener(`DOMContentLoaded`, function () {
  document.body.classList.add(`active_body`);

  let logo = document.querySelector(`.page-header__logo`);
  let nav = document.querySelector(`.page-header__menu`);
  let socialBlock = document.querySelector(`.social-block__toggler`);
  let lineMenu = document.querySelector(`.js-menu-link`);

  logo.classList.remove(`logo_unactive`);
  nav.classList.remove(`menu_unactive`);
  socialBlock.classList.remove(`social-block__toggler--unactive`);
  lineMenu.classList.add(`active`);
});


// По клику на пункт "призы" всплывает пустой блок.
// let dataHref = document.querySelectorAll(`[data-href]`);
// let purple = document.querySelector(`.screen--purple`);
// let prizeScreen = document.querySelector(`.screen--prizes`);
// let storyScreen = document.querySelector(`.screen--story`);

// dataHref.forEach(function (element) {
//   element.addEventListener(`click`, function () {
//     element.getAttribute(`data-href`);
//     let attr = element.getAttribute(`data-href`);

//     if (attr === `prizes`) {
//       purple.classList.remove(`purple--hidden`);
//     }
//   });
// });

// prizeScreen.addEventListener(`click`, function (e) {
//   setTimeout(function () {
//     window.location = e.getAttribute(`href`);
//   }, 3000);
// });
