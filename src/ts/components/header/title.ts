import { Routers } from '../../routes/routes';

class Title {
  private element: HTMLAnchorElement;

  private defaultText: string;

  private mobileText: string;

  private router: Routers;

  constructor(defaultText: string, mobileText: string) {
    this.defaultText = defaultText;
    this.mobileText = mobileText;
    this.router = new Routers();

    this.element = document.createElement('a');
    this.element.className = 'title user-select-none cursor-pointer';
    this.element.title = 'home';
    this.element.onclick = this.handleTitleClick.bind(this);

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

  private handleTitleClick() {
    this.router.navigate('/');
  }

  getElement(): HTMLAnchorElement {
    return this.element;
  }
}

export { Title };
