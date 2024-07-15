import './style.css';
import { msg, createHomePage } from './home.js';
import { createMenuPage } from './menu.js';

const btnHome = document.querySelector('#home');
const bntMenu = document.querySelector('#menu');
const btnAbout = document.querySelector('#about');

console.log('Aloha!!!!!!!!!');
msg();
createHomePage();

btnHome.addEventListener('click',() => {
    clearPage();
    createHomePage();
});

bntMenu.addEventListener('click', () => {
    clearPage();
    createMenuPage();
});

btnAbout.addEventListener('click', () => {
    clearPage();
});

function clearPage() {
    const content = document.querySelector('#content');
    content.textContent = '';
}