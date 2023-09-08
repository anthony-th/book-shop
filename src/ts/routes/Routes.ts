class Routers {
  private routes: Record<string, () => void> = {};

  constructor() {
    window.onhashchange = this.route.bind(this);
  }

  addRoute(path: string, callback: () => void) {
    this.routes[path] = callback;
  }

  route() {
    const path = window.location.hash.substring(1);
    if (this.routes[path]) {
      this.routes[path]();
    } else {
      console.log('Page not found');
    }
  }
  
  navigate(path: string) {
    window.location.hash = path;
  }
}

export { Routers };
