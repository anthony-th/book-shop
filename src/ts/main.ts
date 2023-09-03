import { Catalog } from './pages/catalog';
import { Routers } from './routes';
import { Navigation } from './navigation';

class Main {
  private mainElement: HTMLElement;

  private router: Routers;

  constructor() {
    this.mainElement = document.createElement('main');
    this.mainElement.classList.add('main');

    this.router = new Routers();
    this.setupRoutes();

    const navigation = new Navigation(this.router);
    this.mainElement.appendChild(navigation.render());

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
      this.mainElement.appendChild(new Navigation(this.router).render());
      this.mainElement.appendChild(new Catalog().getElement()); 
      console.log('Catalog Page');
    });

    this.router.addRoute('/about', () => {
      this.clearMainElement();
      this.mainElement.appendChild(new Navigation(this.router).render());
      console.log('About Page');
    });
  }

  getElement(): HTMLElement {
    return this.mainElement;
  }
}

export { Main };