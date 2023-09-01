import { Book } from "./books";
import booksData from "../data/books.json";

interface BookData {
  title: string;
  author: string;
  imageLink: string;
  price: number;
}

class Catalog {
  private catalogSection: HTMLElement;
  private books: Book[] = [];

  constructor() {
    this.catalogSection = document.createElement("section");
    this.catalogSection.classList.add("section");

    this.addBooksFromData(booksData as BookData[]);
  }

  private addBookToCatalog(book: Book): void {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const titleElement = document.createElement("h2");
    titleElement.textContent = book.title;
    titleElement.classList.add("book-title");

    const authorElement = document.createElement("p");
    authorElement.textContent = book.author;
    authorElement.classList.add("book-author");

    const imgElement = document.createElement("img");
    imgElement.className = "book-image";
    imgElement.src = book.imageLink;

    const priceContainer = document.createElement("div");
    priceContainer.classList.add(
      "book-price-container",
      "cursor-pointer",
      "user-select-none"
    );

    const priceCartIcon = document.createElement("img");
    priceCartIcon.src = "../assets/img/icon-shopping-cart.webp";
    priceCartIcon.className = "price-icon";

    const aboutBook = document.createElement("a");
    aboutBook.classList.add("about-book", "cursor-pointer", "user-select-none");
    aboutBook.textContent = "about book";

    const priceElement = document.createElement("p");
    priceElement.textContent = book.getFormattedPrice();
    priceElement.classList.add("book-price");

    priceContainer.appendChild(priceCartIcon);
    priceContainer.appendChild(priceElement);

    bookElement.appendChild(imgElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(titleElement);
    bookElement.appendChild(aboutBook);
    bookElement.appendChild(priceContainer);

    this.catalogSection.appendChild(bookElement);
  }

  private addBooksFromData(data: BookData[]): void {
    data.forEach((bookData) => {
      const book = new Book(
        bookData.title,
        bookData.author,
        bookData.imageLink,
        bookData.price
      );
      this.books.push(book);
      this.addBookToCatalog(book);
    });
  }

  public getElement(): HTMLElement {
    return this.catalogSection;
  }
}

export { Catalog };