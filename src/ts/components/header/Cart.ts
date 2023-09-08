import { CartCount } from './CartCount';
import { CartIcon } from './CartIcon';
import { TotalPrice } from './TotalPrice';

class Cart {
  element: HTMLDivElement;

  cartIcon: CartIcon;

  containerElement: HTMLDivElement;

  itemCountElement: CartCount;

  totalPriceElement: TotalPrice;
  
  constructor(iconSrc: string, itemCount: number, totalPrice: number) {
    this.element = document.createElement('div');
    this.element.className = 'cart-block cursor-pointer';
    this.element.title = 'click to buy';

    this.cartIcon = new CartIcon(iconSrc);
    this.containerElement = document.createElement('div');
    this.containerElement.className = 'cart-info';

    this.itemCountElement = new CartCount(itemCount);
    this.totalPriceElement = new TotalPrice(totalPrice);

    this.containerElement.appendChild(this.itemCountElement.getElement());
    this.containerElement.appendChild(this.totalPriceElement.getElement());

    this.element.appendChild(this.cartIcon.getElement());
    this.element.appendChild(this.containerElement);
  }

  getElement(): HTMLDivElement {
    return this.element;
  }

  updateItemCount(count: number): void {
    this.itemCountElement.update(count);
  }

  updateTotalPrice(price: number): void {
    this.totalPriceElement.update(price);
  }
}

export { Cart };
