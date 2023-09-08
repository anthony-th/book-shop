class TextInfo {
  private element: HTMLSpanElement;

  constructor(text: string) {
    this.element = document.createElement('span');
    this.element.textContent = text;
  }

  getElement(): HTMLSpanElement {
    return this.element;
  }
}

class AuthorLink {
  private element: HTMLAnchorElement;

  constructor(authorName: string, authorLink: string) {
    this.element = document.createElement('a');
    this.element.className = 'author-link';
    this.element.textContent = authorName;
    this.element.href = authorLink;
  }

  getElement(): HTMLAnchorElement {
    return this.element;
  }
}

class Footer {
  private footerElement: HTMLElement;

  private copyright: TextInfo;

  private author: AuthorLink;
  
  private year: TextInfo;

  constructor() {
    this.footerElement = document.createElement('footer');
    this.footerElement.className = 'footer';

    this.copyright = new TextInfo('Copyright');
    this.author = new AuthorLink('Anthony-Th', 'https://github.com/anthony-th');
    this.year = new TextInfo('© 2022');

    this.footerElement.appendChild(this.copyright.getElement());
    this.footerElement.appendChild(this.author.getElement());
    this.footerElement.appendChild(this.year.getElement());
  }

  getElement(): HTMLElement {
    return this.footerElement;
  }
}

export { Footer };
