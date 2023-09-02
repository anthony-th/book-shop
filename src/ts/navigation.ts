import { Routers } from './routes';

class Navigation {
  private readonly router: Routers;

  private navElement: HTMLElement;

  constructor(router: Routers) {
    this.router = router;
    this.navElement = document.createElement('nav');
    this.navElement.classList.add('nav');
  }

  createNavList(): HTMLUListElement {
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    return ul;
  }

  createNavLink(text: string, path: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.classList.add('link-hover');
    link.textContent = text;
    link.href = path;
    link.onclick = (e) => this.handleNavLinkClick(e, path);
    return link;
  }

  handleNavLinkClick(e: MouseEvent, path: string) {
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

    return this.navElement;
  }
}

export { Navigation };
