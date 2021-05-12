import './styles.css';
import makeMenu from './templates/menu.hbs';
import menuList from './menu.json';
const menu__list = document.querySelector('.js-menu');
const menuMarkup = makeMenu(menuList);
menu__list.insertAdjacentHTML('beforeend', menuMarkup);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitch = document.querySelector('.theme-switch__toggle');

themeSwitch.addEventListener('change', changeTheme);
function changeTheme(event) {
  if (event.target.checked) {
    updateTheme(Theme.LIGHT, Theme.DARK);
  } else {
    updateTheme(Theme.DARK, Theme.LIGHT);
  }
}
function updateTheme(oldTheme, newTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('pageTheme', newTheme);
}

const curTeme = localStorage.getItem('pageTheme') || Theme.LIGHT;
document.body.classList.add(curTeme);
themeSwitch.checked = curTeme === Theme.DARK;

// if (curTeme === Theme.DARK) {
//   document.body.classList.add(Theme.DARK);
//   themeSwitch.checked = true;
// } else {
//   document.body.classList.add(Theme.LIGHT);
// }
