'use strict';

// import header from './components/header.js';

const rootBlock = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const sectionFirst = document.createElement('section');
const sectionSecond = document.createElement('section');
const footer = document.createElement('footer');

rootBlock.appendChild(header);
rootBlock.appendChild(main);
main.appendChild(sectionFirst);
main.appendChild(sectionSecond);
rootBlock.appendChild(footer);

// main.appendChild(section);
// const bookCatalog = document.querySelector()
// const orderBooks = document.createElement('section');

header.classList.add('header');
main.classList.add('main');
sectionFirst.classList.add('section');
sectionFirst.classList.add('section__catalog');
sectionSecond.classList.add('section');
sectionSecond.classList.add('section__order');


header.innerHTML = `
    <div class="container header__container">
      <h1 class="title">Book-Shop</h1>
      <nav class="nav">
        <ul class="list">
          <li class="list__item">
            <a class="link">Sort</a>
          </li>
          <li class="list__item">
            <a class="link">Map</a>
          </li>
          <li class="list__item">
            <a class="link">AppendChild</a>
          </li>
          <li class="list__item">
            <a class="link">Cart</a>
          </li>
        </ul>
      </nav>
    </div>`
// main.innerHTML = ``
// main.innerHTML = `
//   `   

fetch('./assets/js/books.json') //path to the file with json data
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });