import { jsonData } from './data.js';

const moviesArray = JSON.parse(jsonData);

async function createMovieBlock() {
  const randomIndex = Math.round(moviesArray.length * Math.random());
  const movieBlock = document.createElement('div');
  movieBlock.classList.add('movie-container');
  const poster = document.createElement('img');
  poster.classList.add('movie-image');
  // poster.width = 300;
  // poster.height = 450;
  // poster.src = `${moviesArray[randomIndex]['Poster']}`;
  // poster.alt = `${moviesArray[randomIndex]['Title']}`;
  movieBlock.innerHTML = `<img
                          class="movie-image"
                          width="300"
                          height="450"
                          src="${moviesArray[randomIndex]['Poster']}"
                          alt="${moviesArray[randomIndex]['Title']}">`;
  movieBlock.append(poster);
  container.append(movieBlock);
}
const header = document.createElement('header');
header.classList.add('header-container');
const logo = document.createElement('a');
logo.classList.add('logo');
logo.setAttribute('href', 'index.html');
logo.textContent = '__ RandoMovie.JS';
header.append(logo);
const main = document.createElement('main');
const container = document.createElement('div');
container.classList.add('container');
main.append(container);

const footer = document.createElement('footer');
footer.classList.add('footer-container');

document.body.prepend(header, main, footer);

for (let i = 0; i < 3; i++) {
  createMovieBlock();
}

// async function fetchData() {
//   let incomingData;

//   try {
//     const response = await fetch(
//       'https://raw.githubusercontent.com/toedter/movies-demo/master/backend/src/main/resources/static/movie-data/movies-250.json',
//     );
//     const data = await response.json();

//     incomingData = data.movies;
//     console.log(incomingData);

//     // Викликати функцію або виконати інші дії, що залежать від отриманих даних
//     doSomethingWithIncomingData();
//   } catch (error) {
//     console.error('Помилка завантаження файлу:', error);
//   }
// }

// function doSomethingWithIncomingData() {
//   // Тут ви можете використовувати `incomingData`
//   console.log('Дії, що залежать від отриманих даних', incomingData);
// }

// fetchData();

// const movieBlock = document.createElement('div');
// movieBlock.classList.add('movie-container');
// movieBlock.innerHTML = `<img
//                         class="movie-image"
//                         width="300"
//                         height="450"
//                         src="${moviesArray[randomIndex]['Poster']}"
//                         alt="${moviesArray[randomIndex]['Title']}">`;
// document.body.insertAdjacentElement('afterbegin', movieBlock);
