function createHome(){
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';

    let name = document.createElement('h1');
    name.innerHTML = 'Smoke Sesh BBQ';
    contentDiv.appendChild(name);

    let info = document.createElement('p');
    info.innerHTML = 'The best BBQ around! Our food has heft. Spicy jalapeno bacon ipsum dolor amet porchetta leberkas brisket tenderloin biltong prosciutto bresaola pork chop, salami jerky doner pig burgdoggen jowl pork. Tri-tip jowl chuck biltong frankfurter. Burgdoggen sausage pancetta, kielbasa ham hock doner biltong ham hamburger shank meatloaf alcatra ball tip short ribs. Frankfurter ham hock burgdoggen ground round tongue venison. Ball tip beef venison cow, fatback landjaeger burgdoggen sirloin chuck meatball.';
    contentDiv.appendChild(info);

    let image = document.createElement('img');
    image.src = './images/bbq.jpeg';
    contentDiv.appendChild(image);
}

export{
    createHome
};
