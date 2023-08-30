import { catalog } from "./catalog";

export const createMain = () => {
  const main = document.createElement('main');
  main.className = 'main main-page';


  main.append(catalog);
  main.append();

  return main;
};