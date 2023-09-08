import { Updatable } from '../../types/types';

class CartCount implements Updatable {
  element: HTMLDivElement;

  constructor(count: number) {
    this.element = document.createElement('div');
    this.element.className = 'cart-count';
    this.element.textContent = `total: ${count} item`;
  }

  getElement(): HTMLDivElement {
    return this.element;
  }

  update(count: number): void {
    this.element.textContent = `total: ${count} item`;
  }
}

export { CartCount };
