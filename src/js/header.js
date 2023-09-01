import cartIconSrc from "../assets/img/icon-shopping-cart.webp";

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
  constructor(iconSrc, itemCount, totalPrice) {
    this.element = document.createElement("div");
    this.element.className = "cart-block cursor-pointer";
    this.element.title = "click to buy";

    this.cartIcon = new CartIcon(iconSrc);
    this.containerElement = document.createElement("div");
    this.containerElement.className = "cart-info";

    this.itemCountElement = new CartCount(itemCount);
    this.totalPriceElement = new TotalPrice(totalPrice);

    this.containerElement.appendChild(this.itemCountElement.getElement());
    this.containerElement.appendChild(this.totalPriceElement.getElement());

    this.element.appendChild(this.cartIcon.getElement());
    this.element.appendChild(this.containerElement);
  }

  getElement() {
    return this.element;
  }

  updateItemCount(count) {
    this.itemCountElement.updateCount(count);
  }

  updateTotalPrice(price) {
    this.totalPriceElement.updatePrice(price);
  }
}

class TotalPrice {
  constructor(price) {
    this.element = document.createElement("div");
    this.element.className = "total-price";
    this.element.textContent = `subtotal: $${price}`;
    this.updatePrice(price);
  }

  getElement() {
    return this.element;
  }

  updatePrice(price) {
    this.element.textContent = `subtotal: $${price}`;
  }
}

class CartIcon {
  constructor(iconSrc) {
    this.element = document.createElement("img");
    this.element.className = "cart";
    this.element.src = iconSrc;
    this.element.alt = "";
  }

  getElement() {
    return this.element;
  }
}

class CartCount {
  constructor(count) {
    this.element = document.createElement("div");
    this.element.className = "cart-count";
    this.element.textContent = `total: ${count} item`;
  }

  getElement() {
    return this.element;
  }

  updateCount(count) {
    this.element.textContent = `total: ${count} item`;
  }
}

class Header {
  constructor() {
    this.headerElement = document.createElement("header");
    this.headerElement.classList.add("header");

    this.containerElement = document.createElement("div");
    this.containerElement.className ="container header__container";
    this.headerElement.appendChild(this.containerElement);

    this.logo = new Logo("Book-Shop");
    this.cart = new Cart(cartIconSrc, 0, 2);

    this.containerElement.appendChild(this.logo.getElement());
    this.containerElement.appendChild(this.cart.getElement());
  }

  updateCartCount(count) {
    this.cart.cartCount.updateCount(count);
  }

  getElement() {
    return this.headerElement;
  }
}

export { Header };
