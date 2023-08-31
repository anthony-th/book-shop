import cartIconSrc from '../assets/img/icon-shopping-cart.webp';

class Title {
  constructor(text) {
    this.element = document.createElement("h1");
    this.element.className = "title";
    this.element.innerText = text;
  }

  getElement() {
    return this.element;
  }
}

class Logo {
  constructor(titleText) {
    this.element = document.createElement("div");
    this.element.className = "logo";
    this.title = new Title(titleText);
    this.element.appendChild(this.title.getElement());
  }

  getElement() {
    return this.element;
  }
}

class Cart {
  constructor(iconSrc, cartCount) {
    this.element = document.createElement("div");
    this.element.className = "cart-block";
    
    this.cartIcon = new CartIcon(iconSrc);
    this.cartCount = new CartCount(cartCount);
    
    this.element.appendChild(this.cartIcon.getElement());
    this.element.appendChild(this.cartCount.getElement());
  }

  getElement() {
    return this.element;
  }
}

class CartIcon {
  constructor(iconSrc) {
    this.element = document.createElement("img");
    this.element.className = "cart";
    this.element.src = iconSrc;
  }

  getElement() {
    return this.element;
  }
}

class CartCount {
  constructor(count) {
    this.element = document.createElement("div");
    this.element.className = "cart-count";
    this.element.textContent = count;
  }

  getElement() {
    return this.element;
  }

  updateCount(count) {
    this.element.textContent = count;
  }
}

class Header {
  constructor() {
    this.headerElement = document.createElement("header");
    this.headerElement.classList.add("header");

    this.logo = new Logo("Book-Shop");
    this.cart = new Cart(cartIconSrc, 0);

    this.headerElement.appendChild(this.logo.getElement());
    this.headerElement.appendChild(this.cart.getElement());
  }

  updateCartCount(count) {
    this.cart.cartCount.updateCount(count);
  }

  getElement() {
    return this.headerElement;
  }
}

export { Header };
