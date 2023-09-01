import { Catalog } from './catalog';

class Main {
  private mainElement: HTMLElement;

  constructor() {
    this.mainElement = document.createElement('main');
    this.mainElement.classList.add('main');

    const catalog = new Catalog();
    this.mainElement.appendChild(catalog.getElement());
  }

  getElement(): HTMLElement {
    return this.mainElement;
  }
}

export { Main };
