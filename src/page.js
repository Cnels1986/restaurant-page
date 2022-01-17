import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

function createNav(){
    const navContainer = document.createElement('div');

    let homeNav = document.createElement('button');
    homeNav.innerHTML = 'Home';
    homeNav.addEventListener('click', () => {
        reset();
        createHome();
        createFooter();
    });

    let menuNav = document.createElement('button');
    menuNav.innerHTML = 'Menu';
    menuNav.addEventListener('click', () => {
        reset();
        createMenu();
        createFooter();
    });

    let contactNav = document.createElement('button');
    contactNav.innerHTML = 'Contact';
    contactNav.addEventListener('click', () => {
        reset();
        createContact();
        createFooter();
    })

    navContainer.appendChild(homeNav);
    navContainer.appendChild(menuNav);
    navContainer.appendChild(contactNav);
    content.appendChild(navContainer);
}

function createFooter(){
    const footer = document.createElement('footer');
    let a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/Cnels1986');
    a.innerHTML = '&copy Chris Nelson 2021';
    footer.appendChild(a);
    content.appendChild(footer);
}

function reset(){
    content.innerHTML = '';
    createNav();
}

// initial page load, loads to the homepage of the site
function pageLoad(){
    createNav();
    createHome();
    createFooter();
}

export{
    pageLoad
};
