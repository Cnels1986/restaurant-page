import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

function createNav(){
    const navContainer = document.createElement('nav');

    let homeNav = document.createElement('button');
    homeNav.innerHTML = 'Home';
    homeNav.addEventListener('click', () => {
        createHome();
    });

    let menuNav = document.createElement('button');
    menuNav.innerHTML = 'Menu';
    menuNav.addEventListener('click', () => {
        createMenu();
    });

    let contactNav = document.createElement('button');
    contactNav.innerHTML = 'Contact';
    contactNav.addEventListener('click', () => {
        createContact();
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
    a.innerHTML = '&copy Chris Nelson 2022';
    footer.appendChild(a);
    content.appendChild(footer);
}

function reset(){
    content.innerHTML = '';
    createNav();
}


function pageLoad(){
    createNav();

    // div will contain all the content, allowing the nav and footer to remain untouched/changed
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'contentDiv');
    content.appendChild(contentDiv);

    createHome();
    createFooter();
}

export{
    pageLoad
};
