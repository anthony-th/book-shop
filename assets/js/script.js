'use strict';

const rootBlock = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const sectionFirst = document.createElement('section');
const sectionSecond = document.createElement('section');
const footer = document.createElement('footer');
const cartTitle = document.createElement('h2');
const catalogTitle = document.createElement('h2');
const cardsDiv = document.createElement('div');
const cardsOrder = document.createElement('div');
const hr = document.createElement('hr');
const bookFooter = document.createElement('img');
const buttonOrder = document.createElement('button');

let fragmentBody = new DocumentFragment();
fragmentBody.appendChild(header);
fragmentBody.appendChild(main);
main.append(sectionSecond);
sectionSecond.append(cartTitle);
sectionSecond.appendChild(cardsOrder);
sectionSecond.appendChild(hr);
sectionSecond.appendChild(buttonOrder);
sectionSecond.appendChild(bookFooter);
main.prepend(sectionFirst);
sectionFirst.append(catalogTitle);
sectionFirst.appendChild(cardsDiv);
fragmentBody.appendChild(footer);
rootBlock.appendChild(fragmentBody);

header.classList.add('header');
main.classList.add('main');
footer.classList.add('footer');
sectionFirst.className = "section section__catalog";
sectionSecond.className = "section section__order";
cartTitle.className = 'cart-title';
cartTitle.innerHTML = 'Your cart';
catalogTitle.className = 'cart-title';
catalogTitle.innerHTML = 'Catalog';
cardsDiv.className = 'cards';
cardsOrder.className = 'cards';
hr.className = 'hr';
bookFooter.className = 'footer__img user-select';
bookFooter.src = './assets/img/book.png';
bookFooter.alt = '';
buttonOrder.className = 'order__button cursor-pointer user-select';
buttonOrder.innerText = 'confirm';

let headerContainer = document.createElement('div');
headerContainer.className = 'container header__container';
let titleMain = document.createElement('h1');
titleMain.className = 'title';
titleMain.innerText = 'Book-Shop';
let logoMain = document.createElement('div');
logoMain.className = 'logo';
let logo = document.createElement('img');
logo.className = 'logo-img user-select';
logo.src = './assets/img/book.jpg';

let fragmentHeader = new DocumentFragment();
fragmentHeader.appendChild(headerContainer);
headerContainer.appendChild(logoMain);
logoMain.appendChild(titleMain);
logoMain.appendChild(logo);
header.appendChild(fragmentHeader);

let copyright = document.createElement('div');
copyright.className = 'copyright';
let copyrightText = document.createElement('p');
copyrightText.className = 'copyright__text';
copyrightText.innerText = `Copyright`;
let copyrightLink = document.createElement('a');
copyrightLink.className = 'link';
copyrightLink.href = 'https://github.com/anthony-th';
copyrightLink.innerText = 'Anthony Th';
let copyrightMark = document.createElement('p');
copyrightMark.className = 'copyright__text';
copyrightMark.innerText = `©`;

let fragmentFooter = new DocumentFragment();
fragmentFooter.appendChild(copyright);
copyright.appendChild(copyrightText);
copyright.appendChild(copyrightLink);
copyright.appendChild(copyrightMark);
footer.appendChild(fragmentFooter);

fetch('./assets/js/books.json', { mode: 'no-cors' })
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach((element, index, arr) => {
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
      linkInfo.innerText = 'Show more';
      linkInfo.style.textTransform = 'uppercase';
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
      cardsDiv.appendChild(fragmentBook);

      cardTitle.innerText = element.author;
      cardImg.src = element.imageLink;
      cardSubtitle.innerText = element.title;
      cardPrice.innerText = element.price;

      let cardOrder = document.createElement('div');
      cardOrder.className = 'card';
      let cardOrderImg = document.createElement('img');
      cardOrderImg.className = 'card-img';
      cardOrderImg.id = 'imageLink';
      cardOrderImg.alt = '';
      let cardOrderMain = document.createElement('div');
      cardOrderMain.className = 'card__main-block';
      let cardOrderTitle = document.createElement('h2');
      cardOrderTitle.className = 'card-title';
      cardOrderTitle.id = 'author';
      let cardOrderPrice = document.createElement('p');
      cardOrderPrice.className = 'card-price';
      let orders = document.createElement('input');
      orders.className = 'orders';
      orders.type = 'number';
      orders.min = '0';
      orders.max = '99';
      orders.maxLength = '2';
      orders.minLength = '1';
      orders.value = 0;
      orders.oninput = function(){
        this.value = this.value.substr(0, 2);
      }
      let fullTrash = document.createElement('img');
      fullTrash.className = 'full-trash cursor-pointer user-select';
      fullTrash.src = './assets/img/close48.png';
      fullTrash.alt = '';
      cardLinkSecond.addEventListener('click', addToCart);

      function addToCart() {
        orders.value = +orders.value + 1;

        let fragmentAddCart = new DocumentFragment();
        fragmentAddCart.appendChild(cardOrder);
        cardOrder.appendChild(cardOrderImg);
        cardOrder.appendChild(cardOrderMain);
        cardOrderMain.appendChild(cardOrderTitle);
        cardOrderMain.appendChild(cardOrderPrice);
        cardOrderMain.appendChild(orders);
        cardOrderMain.appendChild(fullTrash);
        cardsOrder.appendChild(fragmentAddCart);

        cardOrderTitle.innerText = element.author;
        cardOrderImg.src = element.imageLink;
        cardSubtitle.innerText = element.title;
        cardOrderPrice.innerText = element.price;

        hr.style.visibility = 'visible';
        buttonOrder.style.visibility = 'visible';

        fullTrash.addEventListener('click', closeTrash);
        function closeTrash(e) {
          e.target.parentNode.parentNode.remove();
          orders.value = 0;
          setTimeout(function() {
            if (cardsOrder.childNodes.length == 0) {
              hr.style.visibility = 'hidden';
              buttonOrder.style.visibility = 'hidden';
            }
          }, 3000);
        }    
      }

      linkInfo.addEventListener('click', openModal);
      function openModal() {
        let shadow = document.createElement('div');
        shadow.className = 'shadow';
        let modalWindow = document.createElement('div');
        modalWindow.className = 'modal';
        shadow.classList.toggle('visible');
        header.classList.toggle('blur');
        main.classList.toggle('blur');
        footer.classList.toggle('blur');
        let cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.style.textTransform = 'uppercase';
        cardTitle.innerText = arr[index].author;
        let cardImg = document.createElement('img');
        cardImg.className = 'card-img';
        cardImg.id = 'imageLink';
        cardImg.alt = '';
        cardImg.src = arr[index].imageLink;
        let modalBlock = document.createElement('div');
        modalBlock.className = 'modal-block';
        let modalBlockInfo = document.createElement('div');
        modalBlockInfo.className = 'modal-block__info';
        let priceBlock = document.createElement('div');
        priceBlock.className = 'modal__price-block';
        let cardPrice = document.createElement('p');
        cardPrice.className = 'card-price';
        cardPrice.id = 'price';
        cardPrice.innerText = arr[index].price;
        let buyCart = document.createElement('p');
        buyCart.className = 'buy-cart cursor-pointer user-select';
        buyCart.innerText = 'Add to cart';
        buyCart.addEventListener('click', addToCart);
        let descriptionInfo = document.createElement('p');
        descriptionInfo.className = 'description';
        descriptionInfo.innerText = arr[index].description;
        let imageCancel = document.createElement('img');
        imageCancel.className = 'cancel cursor-pointer user-select';
        imageCancel.src = './assets/img/close48.png';
        rootBlock.style.overflow = 'hidden';
        imageCancel.addEventListener('click', closeModal);
        function closeModal() {
          shadow.remove();
          modalWindow.remove();
          shadow.classList.toggle('visible');
          header.classList.toggle('blur');
          main.classList.toggle('blur');
          footer.classList.toggle('blur');
          rootBlock.style.overflow = 'visible';
        }
        let fragmentShadow = new DocumentFragment();
        fragmentShadow.appendChild(shadow);
        rootBlock.prepend(fragmentShadow);        

        let fragmentModal = new DocumentFragment();
        fragmentModal.appendChild(modalWindow);
        modalWindow.appendChild(cardImg);
        modalWindow.appendChild(modalBlock);
        modalBlock.appendChild(modalBlockInfo);
        modalBlockInfo.appendChild(cardTitle);
        modalBlockInfo.appendChild(descriptionInfo);
        modalBlock.appendChild(priceBlock);
        priceBlock.appendChild(cardPrice);
        priceBlock.appendChild(buyCart);
        modalWindow.appendChild(imageCancel);
        rootBlock.prepend(fragmentModal);
      }
    });
  });
  