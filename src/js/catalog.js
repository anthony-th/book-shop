import booksData from '../data/books.json';

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

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;

    const imgElement = document.createElement('img');
    imgElement.src = book.imageLink;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = book.description;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${book.price}`;

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(imgElement);
    bookElement.appendChild(descriptionElement);
    bookElement.appendChild(priceElement);

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
