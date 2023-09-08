interface BookType {
  title: string;
  author: string;
  imageLink: string;
  price: number;
}

interface Updatable {
  update(value: number): void;
}

export { BookType, Updatable };