import cartIconSrc from '../assets/img/icon-shopping-cart.webp';

class Header {
  constructor() {
    this.headerElement = document.createElement("header");
    this.headerElement.classList.add("header");
    this.titleElement = this.createTitle();
    this.logoElement = this.createLogo();
    this.cartElement = this.createCart();
    this.headerElement.appendChild(this.logoElement);
    this.headerElement.appendChild(this.cartElement);
  }

  createTitle() {
    const title = document.createElement("h1");
    title.className = "title";
    title.innerText = "Book-Shop";
    return title;
  }

  createLogo() {
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.appendChild(this.titleElement);
    return logo;
  }

  createCart() {
    const cart = document.createElement("img");
    cart.src = cartIconSrc;
    cart.className = "cart";
    return cart;
  }

  getElement() {
    return this.headerElement;
  }
}

export { Header };
