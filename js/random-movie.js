////////// Тут імпортуються та перетворюються дані, описуються функції,

import { gotData } from './arrayOfMovieData.js';

// const moviesArray = JSON.parse(jsonData);

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

// function check(a) {
//   const value =
//     gotData[randomIndex].contributionQuestions.edges[0].node.entity.primaryImage
//       .url;
//   if (
//     gotData[randomIndex].contributionQuestions.edges[0].node.entity.primaryImage
//       .url
//   ) {
//     return value;
//   } else {
//     randomIndex = Math.round(gotData.length * Math.random());
//   }
// }

function randomMoviePicker(n) {
  for (let i = 0; i < n; i++) {
    // const randomIndex = Math.round(gotData.length * Math.random());
    const randomIndex = i;
    const content = makeTag('div', 'movie-container');
    const link = makeTag('a', 'poster-link', {
      href: `https://www.google.com/search?q=${gotData[
        randomIndex
      ].originalTitleText.text.replace(/[\s]/g, '+')}+watch+online`,
      target: 'blank',
    });
    const imageSrc =
      gotData[randomIndex].contributionQuestions.edges[0].node.entity
        .primaryImage.url;
    const poster = makeTag('img', 'movie-image', {
      // width: 300,
      height: 450,
      src: imageSrc,
      alt: gotData[randomIndex].originalTitleText.text,
    });
    content.append(link);
    link.append(poster);
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
  '__ RandoMovie.UA',
);

const generateButton = makeButton(
  'button',
  'regenerate',
  'Get another three awesome ukrainian movies!',
);

assembleBaseHtml({
  body: [header, main, footer],
  header: [logoLink],
  main: [container, generateButton],
});

randomMoviePicker(1270);

getListener(generateButton, 'click', location.reload.bind(location));
