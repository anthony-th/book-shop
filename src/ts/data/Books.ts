import { BookType } from '../types/Types';

class Book implements BookType {
  
  title: string;

  author: string;

  imageLink: string;

  price: number;

  description: string;

  genres: string[];

  constructor({ title, author, imageLink, price, description, genres }: BookType) {
    if (!title || !author || !imageLink || !price || !description || !genres) {
      throw new Error('All required properties (title, author, imageLink, and price) must be provided.');
    }

    this.title = title;
    this.author = author;
    this.imageLink = imageLink;
    this.price = price;
    this.description = description;
    this.genres = genres;
  }

  getFormattedPrice(): string {
    return `$${this.price}`;
  }
}

export { Book };
