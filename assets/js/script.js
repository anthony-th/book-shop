'use strict';

const rootBlock = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const sectionFirst = document.createElement('section');
const sectionSecond = document.createElement('section');
const footer = document.createElement('footer');

// const author = document.getElementById('author');
// const imageLink = document.getElementById('imageLink');
// const title = document.getElementById('title');
// const price = document.getElementById('price');
// const description = document.getElementById('description');
// const card = document.querySelectorAll('card');
let fragmentBody = new DocumentFragment();
fragmentBody.appendChild(header);
fragmentBody.appendChild(main);
main.append(sectionSecond);
main.prepend(sectionFirst);
fragmentBody.appendChild(footer);
rootBlock.appendChild(fragmentBody);

header.classList.add('header');
main.classList.add('main');
footer.classList.add('footer');
sectionFirst.className = "section section__catalog";
sectionSecond.className = "section section__order";

let headerContainer = document.createElement('div');
headerContainer.className = 'container header__container';
let titleMain = document.createElement('h1');
titleMain.className = 'title';
titleMain.innerText = 'Book-Shop';
let nav = document.createElement('nav');
nav.className = 'nav';
let ul = document.createElement('ul');
ul.className = 'list';
let li = document.createElement('li');
li.className = 'list__item';
let link = document.createElement('a');
link.className = 'link cursor-pointer';
link.innerText = 'AppendChild';

let fragmentHeader = new DocumentFragment();
fragmentHeader.appendChild(headerContainer);
headerContainer.appendChild(titleMain);
headerContainer.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);
li.appendChild(link);
header.appendChild(fragmentHeader);

let copyright = document.createElement('div');
copyright.className = 'copyright';
copyright.innerHTML = `Copyright  <a class="link" href="https://github.com/anthony-th">Anthony Th</a>  ©`;

let fragmentFooter = new DocumentFragment();
fragmentFooter.appendChild(copyright);
footer.appendChild(fragmentFooter);

let data = fetch('./assets/js/books.json') 
  .then(response => {
    return response.json();
  })
  .then(data => {

    data.forEach(element => {
      let cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      let cardMain = document.createElement('div');
      cardMain.className = 'card__main-block';
      let cardTitle = document.createElement('h2');
      cardTitle.className = 'card-title';
      cardTitle.id = 'author';
      let cardImg = document.createElement('img');
      cardImg.className = 'card-img';
      cardImg.id = 'imageLink';
      cardImg.alt = '';
      let cardSubtitle = document.createElement('h3');
      cardSubtitle.className = 'card-subtitle';
      cardSubtitle.id = 'title';
      let cardLink = document.createElement('a');
      cardLink.className = 'card-link';
      let linkInfo = document.createElement('h5');
      linkInfo.className = 'link-info cursor-pointer user-select';
      linkInfo.innerText = 'VIEW INFO';
      let priceBlock = document.createElement('div');
      priceBlock.className = 'price-block';
      let cardPrice = document.createElement('p');
      cardPrice.className = 'card-price';
      cardPrice.id = 'price';
      let cardLinkSecond = document.createElement('a');
      cardLinkSecond.className = 'card__link cursor-pointer user-select';
      let cardImgSecond = document.createElement('img');
      cardImgSecond.className = 'card-img';
      cardImgSecond.src = './assets/img/icon-shopping-cart.png';
      cardImgSecond.alt = '';

      let fragmentBook = new DocumentFragment();
      fragmentBook.appendChild(cardDiv);
      cardDiv.appendChild(cardMain);
      cardMain.appendChild(cardTitle);
      cardMain.appendChild(cardImg);
      cardMain.appendChild(cardSubtitle);
      cardDiv.appendChild(cardLink);
      cardLink.appendChild(linkInfo);
      cardDiv.appendChild(priceBlock);
      priceBlock.appendChild(cardPrice);
      priceBlock.appendChild(cardLinkSecond);
      cardLinkSecond.appendChild(cardImgSecond);
      sectionFirst.appendChild(fragmentBook);

      cardTitle.innerText = element.author;
      cardImg.src = element.imageLink;
      cardSubtitle.innerText = element.title;
      cardPrice.innerText = element.price;
    });
  });
  