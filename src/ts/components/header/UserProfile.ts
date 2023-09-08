class UserProfile {
  element: HTMLDivElement;

  imgElement: HTMLImageElement;
  
  imgSrc: string;

  constructor(imgSrc: string) {
    this.element = document.createElement('div');
    this.element.className = 'user-profile cursor-pointer';

    this.imgElement = document.createElement('img');
    this.imgElement.src = imgSrc;
    this.imgElement.title = 'User Profile';
    this.imgElement.className = 'user-profile__image';

    this.imgSrc = imgSrc;

    this.element.appendChild(this.imgElement);
  }

  getElement(): HTMLDivElement {
    return this.element;
  }
}

export { UserProfile };
