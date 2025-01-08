import {loadHomepage} from './modules/homepage.js';
import {loadMenu} from './modules/menu.js';
import {loadContact} from './modules/contact.js';
import './styles.css';

loadHomepage(); //load homepage on start

const home = document.querySelector('#home');
home.addEventListener('click', loadHomepage);

const menu = document.querySelector('#menu');
menu.addEventListener('click', loadMenu);

const contact = document.querySelector('#contact');
contact.addEventListener('click', loadContact);