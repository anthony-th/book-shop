import { Routers } from './routes';

class Navigation {
  private readonly router: Routers;

  private navElement: HTMLElement;

  private barElement: HTMLElement;
  
  constructor(router: Routers) {
    this.router = router;
    this.navElement = document.createElement('nav');
    this.navElement.classList.add('nav');
    this.barElement = document.createElement('div');
    this.barElement.classList.add('bar');
    this.barElement.appendChild(this.navElement);
  }

  createNavList(): HTMLUListElement {
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    return ul;
  }

  createNavLink(text: string, path: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.classList.add('nav-link', 'link-hover');
    link.textContent = text;
    link.href = path;
    link.title = text;
  
    link.onclick = (e) => this.handleNavLinkClick(e, link, path);

    return link;
  }
  

  handleNavLinkClick(e: MouseEvent, link: HTMLAnchorElement, path: string) {
    e.preventDefault();
    this.router.navigate(path);
  }
  

  render(): HTMLElement {
    const navList = this.createNavList();

    const homeLink = this.createNavLink('Catalog', '/');
    const aboutLink = this.createNavLink('About', '/about');

    const homeListItem = document.createElement('li');
    homeListItem.classList.add('list-item');
    homeListItem.appendChild(homeLink);

    const aboutListItem = document.createElement('li');
    aboutListItem.classList.add('list-item');
    aboutListItem.appendChild(aboutLink);

    navList.appendChild(homeListItem);
    navList.appendChild(aboutListItem);

    this.navElement.appendChild(navList);

    return this.barElement;
  }
}

export { Navigation };
