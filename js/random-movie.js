////////// Тут імпортуються та перетворюються дані, описуються функції,

import { data_v1 } from './unfilteredData.js';

///// makeTag створює html елемент із класом (або класами), атрибутами та текстовим контентом;
///// tagName приймає рядок із назвою тегу, наприклад 'div', 'h1', 'p';
///// classes приймає рядок або масив рядків, наприклад 'header', 'logo', ['header', 'logo'];
///// attObj  приймає обʼєкт, у якому key це імʼя атрибуту, а value - рядок, що є його значенням;
///// innerText приймає рядок, що розташовується між відкриваючим та закриваючим тегами;

function makeTag(tagName, classes, attObj, userText) {
  const html = document.createElement(tagName);
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach(x => html.classList.add(x));
    } else {
      html.classList.add(classes);
    }
  }
  for (const attribute in attObj) {
    html.setAttribute(`${attribute}`, `${attObj[attribute]}`);
  }
  html.textContent = userText;
  return html;
}

///// makeButton створює html елемент button із бажаними типом, класом та текстом;
///// приймає параметри type (рядок), classes (рядок або масив рядків) та userText (рядок);

function makeButton(type, classes, userText) {
  const button = document.createElement('button');
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach(x => button.classList.add(x));
    } else {
      button.classList.add(classes);
    }
  }
  button.type = type;
  button.textContent = userText;
  return button;
}

///// randomMoviePicker створює html елемент що містить n кількість фільмів, узятих з бази з топ-240 фільмів;
///// Фільми зберігаються у масиві обʼєктів, кожен з яких містить дані про фільм, у тому числі і постер;

function randomMoviePicker(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(moviesArray.length * Math.random());
    const imageSrc =
      moviesArray[randomIndex].contributionQuestions.edges[0].node.entity
        .primaryImage.url;
    const imageAlt = moviesArray[randomIndex].originalTitleText.text;
    const movieCard = makeTag('div', 'movie-container');
    const poster = makeTag('img', 'movie-image', {
      width: 300,
      height: 450,
      src: imageSrc,
      alt: imageAlt,
    });
    const link = makeTag('a', 'poster-link', {
      href: `https://www.google.com/search?q=${moviesArray[
        randomIndex
      ].originalTitleText.text.replace(/[\s]/g, '+')}+watch+online`,
      target: 'blank',
    });
    link.appendChild(poster);
    movieCard.appendChild(link);
    array.push(movieCard);
    moviesArray.splice(randomIndex, 1);
  }
  return array;
}

///// assembleBaseHtml - збирає структуру сторінки. Приймає обʼєкт, який містить пари key: value, де:
///// key - батьківський елемент, створений викликом функції makeTag() або document.querySelector();
///// value - масив дочірніх елементів, створених за допомогою makeTag();
///// наприклад { body: [header, main, footer], header: [logoLink], main: [container] };

function assembleBaseHtml(obj) {
  for (const item in obj) {
    const parent = document.querySelector(item);
    for (const child of obj[item]) {
      parent.insertAdjacentElement('afterbegin', child);
    }
  }
}

///// getListener - додає до елементу прослуховувач подій.
///// Приймає наступні параметри: element, eventType, callBackFn. Опис параметрів:
///// element - DOM елемент, на який додається слухач, створений власноруч у розмітці сторінки
///// і отриманий за допомогою document.querySelector() або за допомогою функції makeTag()
///// eventType - рядок, що визначає тип події, наприклад 'click', 'submit', 'DOMContentLoaded', etc;
///// callbackFn - функція, що виконується при події eventType
///// Приклад виклику:
///// const newButton = makeButton('button', 'show-alert', 'Show alert message!');
///// getListener(newButton, 'click', () => alert('You have just clicked on a button that cause this alert to appear');

function getListener(element, eventType, callbackFn) {
  element.addEventListener(eventType, callbackFn);
}

///// addMovies - функція, що додає кількість карток з фільмами quantity до батьківського DOM-елементу placement;
///// Приклад виклику:
///// const wrapper = document.querySelector('.wrapper');
///// addMovies(wrapper, 3);

function addMovies(placement, quantity) {
  const x = randomMoviePicker(quantity);
  x.forEach(item => placement.insertAdjacentElement('beforeend', item));
  const movieImages = document.querySelectorAll('.movie-image');
  movieImages.forEach(x => {
    x.addEventListener('load', () => {
      x.classList.add('visible');
    });
  });
}

////////// Після цього вже руцями викликаємо створюємо бажані елементи та викликаємо відповідні функції //////////

const moviesArray = data_v1;
const header = makeTag('header', ['header', 'header-container']);
const main = makeTag('main', 'main-container');
const footer = makeTag('footer', ['footer', 'footer-container']);
const container = makeTag('container', 'container');
const logoLink = makeTag(
  'a',
  ['logo-link', 'test'],
  { href: 'index.html', name: 'sitelogo', alt: 'random' },
  '__ RandoMovie.UA',
);
const generateButton = makeButton(
  'button',
  'regenerate',
  'Get another three awesome movies!',
);

const toTop = makeButton('button', 'to-the-top', '\u25b2');

assembleBaseHtml({
  body: [footer, main, header],
  header: [logoLink],
  main: [generateButton, container],
  footer: [toTop],
});

addMovies(container, 3);

getListener(generateButton, 'click', () => {
  addMovies(container, 3);
  setTimeout(() => {
    footer.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }, 250);
});
getListener(toTop, 'click', () => {
  setTimeout(() => {
    header.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, 250);
});
