import { Routers } from '../routes/routes';
import { Search } from './header/search';

class Navigation {
  private readonly router: Routers;

  private navElement: HTMLElement;

  private barElement: HTMLElement;

  private activeLink: HTMLAnchorElement | null = null;

  private setActiveLink(link: HTMLAnchorElement) {
    link.classList.add('active');
    this.activeLink = link;
  }

  private readonly search: Search;
  
  constructor(router: Routers, search: Search) {
    this.router = router;
    this.search = search;
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
    link.classList.add('nav-link');
    link.textContent = text;
    link.href = path;
    link.title = text;
    link.setAttribute('data-hover', text);
  
    link.onclick = (e) => this.handleNavLinkClick(e, link, path);

    return link;
  }
  

  handleNavLinkClick(e: MouseEvent, link: HTMLAnchorElement, path: string) {
    e.preventDefault();
    this.router.navigate(path);
    this.search.installSrc();
    if (this.activeLink) {
      this.activeLink.classList.remove('active');
    }

    this.setActiveLink(link);
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
