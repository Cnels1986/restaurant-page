function createHome(){
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';

    let name = document.createElement('h1');
    name.innerHTML = 'Smoke Sesh BBQ';
    contentDiv.appendChild(name);

    let info = document.createElement('p');
    info.innerHTML = 'The best BBQ around! Our food has heft';
    contentDiv.appendChild(info);

    let image = document.createElement('img');
    image.src = './images/bbq.jpeg';
    contentDiv.appendChild(image);
}

export{
    createHome
};
