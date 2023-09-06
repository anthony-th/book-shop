import { Book } from '../books';
import booksData from '../../data/books.json';
import { BookType } from '../types/types';

class BookCatalogItem {
  private book: Book;

  private bookElement: HTMLElement;

  constructor(book: Book) {
    this.book = book;
    this.bookElement = this.createBookElement();
  }

  private createBookElement(): HTMLElement {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    bookElement.appendChild(this.createImageElement());
    bookElement.appendChild(this.createAuthorElement());
    bookElement.appendChild(this.createTitleElement());
    bookElement.appendChild(this.createAboutBookLink());
    bookElement.appendChild(this.createPriceContainer());

    return bookElement;
  }

  private createImageElement(): HTMLElement {
    const imgElement = document.createElement('img');
    imgElement.className = 'book-image';
    imgElement.src = this.book.imageLink;
    imgElement.title = `${this.book.author}\n${this.book.title}`;
    return imgElement;
  }

  private createAuthorElement(): HTMLElement {
    const authorElement = document.createElement('p');
    authorElement.textContent = this.book.author;
    authorElement.classList.add('book-author');
    authorElement.title = this.book.author;
    return authorElement;
  }

  private createTitleElement(): HTMLElement {
    const titleElement = document.createElement('h2');
    titleElement.textContent = this.book.title;
    titleElement.classList.add('book-title');
    titleElement.title = this.book.title;
    return titleElement;
  }

  private createAboutBookLink(): HTMLElement {
    const aboutBook = document.createElement('a');
    aboutBook.classList.add('about-book', 'cursor-pointer', 'user-select-none', 'link-hover');
    aboutBook.textContent = 'about book';
    return aboutBook;
  }

  private createPriceContainer(): HTMLElement {
    const priceContainer = document.createElement('div');
    priceContainer.title = 'click to buy';
    priceContainer.classList.add(
      'book-price-container',
      'cursor-pointer',
      'user-select-none',
    );

    priceContainer.appendChild(this.createPriceCartIcon());
    priceContainer.appendChild(this.createPriceElement());

    return priceContainer;
  }

  private createPriceCartIcon(): HTMLElement {
    const priceCartIcon = document.createElement('img');
    priceCartIcon.src = '../assets/img/icon-shopping-cart.webp';
    priceCartIcon.className = 'price-icon';
    priceCartIcon.alt = '';
    return priceCartIcon;
  }

  private createPriceElement(): HTMLElement {
    const priceElement = document.createElement('p');
    priceElement.textContent = this.book.getFormattedPrice();
    priceElement.classList.add('book-price');
    return priceElement;
  }

  public getElement(): HTMLElement {
    return this.bookElement;
  }
}

class Catalog {
  private catalogSection: HTMLElement;
  
  private books: BookCatalogItem[] = [];

  constructor() {
    this.catalogSection = document.createElement('section');
    this.catalogSection.classList.add('section');

    this.addBooksFromData(booksData as BookType[]);
  }

  private addBooksFromData(data: BookType[]): void {
    try {
      data.forEach((bookData) => {
        const book = new Book(bookData as BookType);
        const catalogItem = new BookCatalogItem(book);
        this.books.push(catalogItem);
        this.catalogSection.appendChild(catalogItem.getElement());
      });
    } catch (error) {
      console.error('Ошибка при обработке данных книг:', error);
    }
  }

  public getElement(): HTMLElement {
    return this.catalogSection;
  }
}

export { Catalog };
