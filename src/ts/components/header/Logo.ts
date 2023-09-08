import { Title } from './Title';

class Logo {
  element: HTMLDivElement;

  title: Title;

  constructor(titleText: string) {
    this.element = document.createElement('div');
    this.element.className = 'logo';
    this.title = new Title(titleText);
    this.element.appendChild(this.title.getElement());
  }

  getElement(): HTMLDivElement {
    return this.element;
  }
}

export { Logo };
