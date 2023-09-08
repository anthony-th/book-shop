import { Logo } from './Logo';
import { Cart } from './Cart';
import { UserProfile } from './UserProfile';
import { Search } from './Search';
import { Routers } from '../../routes';
import { Navigation } from '../../navigation';

class Header {
  headerElement: HTMLHeadElement;

  containerElement: HTMLDivElement;

  headerTabs: HTMLDivElement;

  logo: Logo;

  cart: Cart;

  userProfile: UserProfile;

  search: Search;

  private router: Routers;

  constructor() {
    this.headerElement = document.createElement('header');
    this.headerElement.classList.add('header');

    this.containerElement = document.createElement('div');
    this.containerElement.className = 'container header__container';
    this.headerElement.appendChild(this.containerElement);

    this.headerTabs = document.createElement('div');
    this.headerTabs.className = 'header-tabs';

    this.logo = new Logo('Book-Shop', 'B.-Sh.');
    this.cart = new Cart('../assets/img/icon-shopping-cart.webp', 0, 2);
    this.userProfile = new UserProfile('../assets/img/user_registration.webp');
    this.search = new Search('../assets/img/search.webp', '../assets/img/cancel.webp');
    this.router = new Routers();

    const navigation = new Navigation(this.router, this.search);
    this.headerElement.appendChild(navigation.render());

    this.containerElement.appendChild(this.logo.getElement());
    this.headerTabs.appendChild(this.userProfile.getElement());
    this.headerTabs.appendChild(this.search.getElement());
    this.headerTabs.appendChild(this.cart.getElement());
    this.containerElement.appendChild(this.headerTabs);
  }

  updateCartCount(count: number): void {
    this.cart.updateItemCount(count);
  }

  getElement(): HTMLHeadElement {
    return this.headerElement;
  }
}

export { Header };
