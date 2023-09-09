interface BookType {
  title: string;
  author: string;
  imageLink: string;
  price: number;
  description: string;
  genres: string;
}

interface Updatable {
  update(value: number): void;
}

export { BookType, Updatable };