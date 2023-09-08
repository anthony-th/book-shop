import { Title } from './title';

class Logo {
  element: HTMLDivElement;

  title: Title;

  constructor(defaultText: string, mobileText: string) {
    this.element = document.createElement('div');
    this.element.className = 'logo';
    this.title = new Title(defaultText, mobileText);
    this.element.appendChild(this.title.getElement());
  }

  getElement(): HTMLDivElement {
    return this.element;
  }
}

export { Logo };
