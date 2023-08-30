class TextInfo {
  constructor(text) {
    this.element = document.createElement("span");
    this.element.textContent = text;
  }

  getElement() {
    return this.element;
  }
}

class AuthorLink {
  constructor(authorName, authorLink) {
    this.element = document.createElement("a");
    this.element.className = "author-link";
    this.element.textContent = authorName;
    this.element.href = authorLink;
  }

  getElement() {
    return this.element;
  }
}

class Footer {
  constructor() {
    this.footerElement = document.createElement("footer");
    this.footerElement.className = "footer";
    
    this.copyright = new TextInfo("Copyright");
    this.author = new AuthorLink("Anthony-Th", "https://github.com/anthony-th");
    this.year = new TextInfo("© 2022");

    this.footerElement.appendChild(this.copyright.getElement());
    this.footerElement.appendChild(this.author.getElement());
    this.footerElement.appendChild(this.year.getElement());
  }

  getElement() {
    return this.footerElement;
  }
}

export { Footer };
