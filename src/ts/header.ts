import { Updatable } from './types/types';

class Title {
  element: HTMLHeadingElement;

  constructor(text: string) {
    this.element = document.createElement('h1');
    this.element.className = 'title';
    this.element.innerText = text;
  }

  getElement(): HTMLHeadingElement {
    return this.element;
  }
}

class Search {
  element: HTMLInputElement;

  constructor() {
    this.element = document.createElement('input');
    this.element.className = 'search-bar';
    this.element.type = 'text';
    this.element.placeholder = 'Search book...';
    this.element.title = 'Search book...';
  }

  getElement(): HTMLInputElement {
    return this.element;
  }
}

class Logo {
  element: HTMLDivElement;

  title: Title;

  constructor(titleText: string) {
    this.element = document.createElement('div');
    this.element.className = 'logo';
    this.title = new Title(titleText);
    this.element.appendChild(this.title.getElement());
  }

  getElement(): HTMLDivElement {
    return this.element;
  }
}

class CartIcon {
  element: HTMLImageElement;

  constructor(iconSrc: string) {
    this.element = document.createElement('img');
    this.element.className = 'cart';
    this.element.src = iconSrc;
    this.element.alt = '';
  }

  getElement(): HTMLImageElement {
    return this.element;
  }
}

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

class TotalPrice implements Updatable {
  element: HTMLDivElement;

  constructor(price: number) {
    this.element = document.createElement('div');
    this.element.className = 'total-price';
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

class Header {
  headerElement: HTMLHeadElement;

  containerElement: HTMLDivElement;

  logo: Logo;
  
  cart: Cart;

  search: Search;

  constructor() {
    this.headerElement = document.createElement('header');
    this.headerElement.classList.add('header');

    this.containerElement = document.createElement('div');
    this.containerElement.className = 'container header__container';
    this.headerElement.appendChild(this.containerElement);

    this.logo = new Logo('Book-Shop');
    this.cart = new Cart('../assets/img/icon-shopping-cart.webp', 0, 2);
    this.search = new Search();

    this.containerElement.appendChild(this.logo.getElement());
    this.containerElement.appendChild(this.search.getElement());
    this.containerElement.appendChild(this.cart.getElement());
  }

  updateCartCount(count: number): void {
    this.cart.updateItemCount(count);
  }

  getElement(): HTMLHeadElement {
    return this.headerElement;
  }
}

export { Header };
