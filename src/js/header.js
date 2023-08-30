class Header {
  constructor() {
    this.headerElement = document.createElement("header");
    this.headerElement.classList.add("header");
    this.titleElement = this.createTitle();
    this.logoElement = this.createLogo();
    this.headerElement.appendChild(this.logoElement);
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

  getElement() {
    return this.headerElement;
  }
}

export { Header };
