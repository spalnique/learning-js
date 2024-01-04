////////// Тут імпортуються та перетворюються дані, описуються функції, 

import { jsonData } from './data.js';

const moviesArray = JSON.parse(jsonData);

function makeTag(tagName, classes, attObj, innerText) {
  const html = document.createElement(tagName);
  if (Array.isArray(classes)) {
    classes.forEach(x => html.classList.add(x));
  } else {
    html.classList.add(classes);
  }
  for (const attribute in attObj) {
    html.setAttribute(`${attribute}`, `${attObj[attribute]}`);
  }
  html.textContent = innerText;

  return html;
}

function randomMoviePicker(quantity) {
  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.round(moviesArray.length * Math.random());
    const content = makeTag('div', 'movie-container');
    const poster = makeTag('img', 'movie-image', {
      width: 300,
      height: 450,
      src: moviesArray[randomIndex]['Poster'],
      alt: moviesArray[randomIndex]['Title'],
    });
    content.append(poster);
    container.insertAdjacentHTML('afterbegin', content.outerHTML);
  }
}

function assembleBaseHtml(obj) {
  for (const item in obj) {
    const parent = document.querySelector(item);
    for (const child of obj[item]) {
      parent.append(child);
    }
  }
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

assembleBaseHtml({
  body: [header, main, footer],
  header: [logoLink],
  main: [container],
});

randomMoviePicker(3);

const button = document.createElement('button');
button.classList.add('regenerate');
button.type = 'button';
button.textContent = 'Get another three awesome movies!';
main.append(button);
button.addEventListener('click', () => {
  location.reload();
});
