class Title {
  private element: HTMLHeadingElement;

  private defaultText: string;

  private mobileText: string;

  constructor(defaultText: string, mobileText: string) {
    this.defaultText = defaultText;
    this.mobileText = mobileText;

    this.element = document.createElement('h1');
    this.element.className = 'title user-select-none';

    this.updateText();

    window.onresize = this.handleResize.bind(this);
  }

  private updateText() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 480) {
      this.element.innerText = this.defaultText;
    } else {
      this.element.innerText = this.mobileText;
    }
  }

  private handleResize() {
    this.updateText();
  }

  getElement(): HTMLHeadingElement {
    return this.element;
  }
}

export { Title };
