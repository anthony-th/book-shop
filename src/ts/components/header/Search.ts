class Search {
  element: HTMLDivElement;

  imgElement: HTMLImageElement;

  imgSrc: string;

  imgCancelSrc: string;
  
  isCancelled: boolean = false;

  constructor(imgSrc: string, imgCancelSrc: string) {
    this.element = document.createElement('div');
    this.element.className = 'search-bar cursor-pointer';

    this.imgElement = document.createElement('img');
    this.imgElement.src = imgSrc;
    this.imgElement.title = 'Search book...';
    this.imgElement.className = 'search-bar__image';

    this.imgSrc = imgSrc;
    this.imgCancelSrc = imgCancelSrc;

    this.imgElement.onclick = this.toggleImage.bind(this);

    this.element.appendChild(this.imgElement);
  }

  getElement(): HTMLDivElement {
    return this.element;
  }

  toggleImage(): void {
    if (this.isCancelled) {
      this.imgElement.src = this.imgSrc;
      this.imgElement.title = 'Search book...';
    } else {
      this.imgElement.src = this.imgCancelSrc;
      this.imgElement.title = 'Close search';
    }

    this.isCancelled = !this.isCancelled;
  }

  installSrc(): void {
    if (this.imgCancelSrc) {
      this.imgElement.src = this.imgSrc;
      this.imgElement.title = 'Search book...';
      this.isCancelled = false;
    }
  }
}

export { Search };
