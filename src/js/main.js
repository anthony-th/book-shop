import { Catalog } from './catalog.js';

class Main {
  constructor() {
    this.mainElement = document.createElement("main");
    this.mainElement.classList.add("main");

    const catalog = new Catalog();
    this.mainElement.appendChild(catalog.getElement());
  }

  getElement() {
    return this.mainElement;
  }
}

export { Main };
