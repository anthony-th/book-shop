class Main {
  constructor() {
    this.mainElement = document.createElement("main");
    this.mainElement.classList.add("main");

    // this.mainElement.appendChild();
  }


  getElement() {
    return this.mainElement;
  }
}

export { Main };