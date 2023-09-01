import booksData from '../data/books.json';
import cartIcon from '../assets/img/icon-shopping-cart.webp'

class Catalog {
  constructor() {
    this.catalogSection = document.createElement("section");
    this.catalogSection.classList.add("section");

    this.addBooksFromData(booksData);
  }

  addBookToCatalog(book) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    titleElement.classList.add('book-title');

    const authorElement = document.createElement('p');
    authorElement.textContent = book.author;
    authorElement.classList.add('book-author');

    const imgElement = document.createElement('img');
    imgElement.className = 'book-image';
    imgElement.src = book.imageLink;

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('book-price-container', 'cursor-pointer', 'user-select-none');

    const priceCartIcon = document.createElement('img')
    priceCartIcon.src = cartIcon;
    priceCartIcon.className = 'price-icon';

    const aboutBook  = document.createElement('a');
    aboutBook.classList.add('about-book', 'cursor-pointer', 'user-select-none');
    aboutBook.textContent = 'about book';

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${book.price}`;
    priceElement.classList.add('book-price');

    priceContainer.appendChild(priceCartIcon);
    priceContainer.appendChild(priceElement);

    bookElement.appendChild(imgElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(titleElement);
    bookElement.appendChild(aboutBook);
    bookElement.appendChild(priceContainer);

    this.catalogSection.appendChild(bookElement);
  }

  addBooksFromData(data) {
    data.forEach(book => {
      this.addBookToCatalog(book);
    });
  }

  getElement() {
    return this.catalogSection;
  }
}

export { Catalog };
