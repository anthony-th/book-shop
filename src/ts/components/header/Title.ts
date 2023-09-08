class Title {
  private element: HTMLHeadingElement;

  constructor(text: string) {
    this.element = document.createElement('h1');
    this.element.className = 'title';
    this.element.innerText = text;
  }

  getElement(): HTMLHeadingElement {
    return this.element;
  }
}

export { Title };
