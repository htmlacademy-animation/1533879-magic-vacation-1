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

document.addEventListener(`DOMContentLoaded`, function () {
  document.body.classList.add(`active_body`);

  let logo = document.querySelector(`.page-header__logo`);
  let nav = document.querySelector(`.page-header__menu`);
  let socialBlock = document.querySelector(`.social-block__toggler`);

  logo.classList.remove(`logo_unactive`);
  nav.classList.remove(`menu_unactive`);
  socialBlock.classList.remove(`socBlToggler_unactive`);
});
