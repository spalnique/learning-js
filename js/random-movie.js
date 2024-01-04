////////// Тут імпортуються та перетворюються дані, описуються функції,

import { jsonData } from './data.js';

const moviesArray = JSON.parse(jsonData);

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
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.round(moviesArray.length * Math.random());
    const content = makeTag('div', 'movie-container');
    const poster = makeTag('img', 'movie-image', {
      width: 300,
      height: 450,
      src: moviesArray[randomIndex]['Poster'],
      alt: moviesArray[randomIndex]['Title'],
    });
    content.append(poster);
    container.append(content);
  }
}

///// assembleBaseHtml - збирає структуру сторінки. Приймає обʼєкт, який містить пари key: value, де:
///// key - батьківський елемент, створений викликом функції makeTag() або document.querySelector();
///// value - масив дочірніх елементів, створених за допомогою makeTag();
///// наприклад { body: [header, main, footer], header: [logoLink], main: [container] };

function assembleBaseHtml(obj) {
  for (const item in obj) {
    console.log(item);
    const parent = document.querySelector(item);
    for (const child of obj[item]) {
      parent.append(child);
    }
  }
}

function getListener(element, eventType, callbackFn) {
  element.addEventListener(eventType, e => callbackFn());
}

////////// Після цього вже руцями викликаємо створюємо бажані елементи та викликаємо відповідні функції //////////

const header = makeTag('header', ['header', 'header-container']);
const main = makeTag('main');
const footer = makeTag('footer', ['footer', 'footer-container']);
const container = makeTag('div', 'container');
const logoLink = makeTag(
  'a',
  ['logo-link', 'test'],
  { href: 'index.html', name: 'sitelogo', alt: 'random' },
  '__ RandoMovie.JS',
);

const generateButton = makeButton(
  'button',
  'regenerate',
  'Get another three awesome movies!',
);

assembleBaseHtml({
  body: [header, main, footer],
  header: [logoLink],
  main: [container, generateButton],
});

randomMoviePicker(3);

getListener(generateButton, 'click', location.reload.bind(location));
