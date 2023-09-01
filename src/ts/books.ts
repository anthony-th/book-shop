class Book {
  title: string;
  author: string;
  imageLink: string;
  price: number;

  constructor(title: string, author: string, imageLink: string, price: number) {
    if (!title || !author || !imageLink || !price) {
      throw new Error(
        "All required properties (title, author, imageLink, and price) must be provided."
      );
    }

    this.title = title;
    this.author = author;
    this.imageLink = imageLink;
    this.price = price;
  }

  getFormattedPrice(): string {
    return `$${this.price}`;
  }
}

export { Book };
