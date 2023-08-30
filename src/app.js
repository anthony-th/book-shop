import './styles/main.scss';
import { createMain } from './js/main';
import { createFooter } from './js/footer';

import { Header } from './js/header';

const body = document.body;

const fragmentBody = new DocumentFragment();

const headerInstance = new Header();
const headerElement = headerInstance.getElement();
fragmentBody.appendChild(headerElement);

fragmentBody.appendChild(createMain());
fragmentBody.appendChild(createFooter());


body.appendChild(fragmentBody);