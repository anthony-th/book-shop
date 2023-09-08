import { Updatable } from '../../types/types';

class TotalPrice implements Updatable {
  element: HTMLDivElement;

  constructor(price: number) {
    this.element = document.createElement('div');
    this.element.className = 'total-price user-select-none';
    this.element.textContent = `subtotal: $${price}`;
    this.update(price);
  }

  getElement(): HTMLDivElement {
    return this.element;
  }

  update(price: number): void {
    this.element.textContent = `subtotal: $${price}`;
  }
}

export { TotalPrice };
