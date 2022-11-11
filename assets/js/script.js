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
footer.classList.add('footer');
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
            <a class="link cursor-pointer">Sort</a>
          </li>
          <li class="list__item">
            <a class="link cursor-pointer">Map</a>
          </li>
          <li class="list__item">
            <a class="link cursor-pointer">AppendChild</a>
          </li>
          <li class="list__item">
            <a class="link cursor-pointer">Cart</a>
          </li>
        </ul>
      </nav>
    </div>`
// main.innerHTML = ``
// main.innerHTML = `
//   `   
sectionFirst.innerHTML = `
      <div class="card">
        <div class="card__main-block">
          <h2 class="card-title">Hey J.A.</h2>
          <img src="./assets/img/effec_jav.jpg" alt="" class="card-img">
          <h3 class="card-subtitle">Node.js in Action</h3>
          <a class="card-link">
            <h5 class="link-info cursor-pointer user-select">VIEW INFO</h5>
          </a>
        </div>
        <div class="price-block">
          <p class="card-price">38</p>
          <a class="card__link cursor-pointer user-select">
            <img src="./assets/img/icon-shopping-cart.png" class="card-img" alt="">
          </a>
        </div>
      </div>`

footer.innerHTML = `
      <div class="copyright">
        Copyright  <a class="link" href="https://github.com/anthony-th">Anthony Th</a>  ©
      </div>`


fetch('./assets/js/books.json') //path to the file with json data
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });