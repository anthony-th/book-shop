class Book {
  constructor(title, author, imageLink, price) {
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

  getFormattedPrice() {
    return `$${this.price}`;
  }
}

export { Book };
