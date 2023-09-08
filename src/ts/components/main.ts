import { Catalog } from '../pages/Catalog';
import { Routers } from '../routes/Routes';

class Main {
  private mainElement: HTMLElement;

  private router: Routers;

  constructor() {
    this.mainElement = document.createElement('main');
    this.mainElement.classList.add('main');

    this.router = new Routers();
    this.setupRoutes();
    
    const catalog = new Catalog();
    this.mainElement.appendChild(catalog.getElement());
  }

  clearMainElement() {
    while (this.mainElement.firstChild) {
      this.mainElement.removeChild(this.mainElement.firstChild);
    }
  }

  setupRoutes() {
    this.router.addRoute('/', () => {
      this.clearMainElement();
      this.mainElement.appendChild(new Catalog().getElement()); 
      console.log('Catalog Page');
    });

    this.router.addRoute('/about', () => {
      this.clearMainElement();
      console.log('About Page');
    });

    this.router.addRoute('/contacts', () => {
      this.clearMainElement();
      console.log('Contacts Page');
    });
  }

  getElement(): HTMLElement {
    return this.mainElement;
  }
}

export { Main };