class CartIcon {
  private readonly element: HTMLImageElement;

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

export { CartIcon };
