import './styles/main.scss';

import { Header } from './ts/components/header/Header';
import { Main } from './ts/components/Main';
import { Footer } from './ts/components/Footer';

const body = document.body;

const fragmentBody = new DocumentFragment();

const headerInstance = new Header();
const mainInstance = new Main();
const footerInstance = new Footer();

const headerElement = headerInstance.getElement();
const mainElement = mainInstance.getElement();
const footerElement = footerInstance.getElement();

fragmentBody.appendChild(headerElement);
fragmentBody.appendChild(mainElement);
fragmentBody.appendChild(footerElement);

body.appendChild(fragmentBody);