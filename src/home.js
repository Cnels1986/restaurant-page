function createHome(){
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';

    let homeDiv = document.createElement('div');

    let image = document.createElement('img');
    image.src = './images/bbq.jpeg';
    image.classList.add('homeImage');
    homeDiv.appendChild(image);

    let flexDiv = document.createElement('div');
    flexDiv.setAttribute('id', 'homeFlexDiv');

    let name = document.createElement('h1');
    name.innerHTML = 'Smoke Sesh BBQ';
    flexDiv.appendChild(name);

    let info = document.createElement('p');
    info.innerHTML = 'The best BBQ around! Our food has heft. Spicy jalapeno bacon ipsum dolor amet porchetta leberkas brisket tenderloin biltong prosciutto bresaola pork chop, salami jerky doner pig burgdoggen jowl pork. Tri-tip jowl chuck biltong frankfurter. Burgdoggen sausage pancetta, kielbasa ham hock doner biltong ham hamburger shank meatloaf alcatra ball tip short ribs. Frankfurter ham hock burgdoggen ground round tongue venison. Ball tip beef venison cow, fatback landjaeger burgdoggen sirloin chuck meatball.';
    flexDiv.appendChild(info);

    homeDiv.appendChild(flexDiv);
    contentDiv.appendChild(homeDiv);
}

export{
    createHome
};
