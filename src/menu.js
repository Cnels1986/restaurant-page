function createMenu(){
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';

    let dishTitle = document.createElement('h3');
    dishTitle.innerHTML = 'Main Dishes';
    contentDiv.appendChild(dishTitle);

    createFoodItem('Full Rack Ribs', 'Full rack of fall off the bone ribs. Cherry and applewood smoked deliciousness. Available sauced or naked.', 23.99);
    createFoodItem('Half Rack Ribs', 'Half rack of our rib meat candy. Available sauced or naked.', 14.99);
    createFoodItem('Smoked Brisket', 'Melt in your mouth brisket. Tender and juicy', 20.99);
    createFoodItem('Burnt Ends', 'Burnt ends... \'nough said', 17.99);
    createFoodItem('Smoked Pull Pork Sandwich', 'Pork is smoked overnight and infused with all the smokey goodness. Served with slaw and your choice sauce.', 12.99);
    createFoodItem('Smoked Chicken Breast', 'Tender juicy smoked BBQ chicken breast.', 16.99);
    createFoodItem('Dozen Smoked Wings', 'A dozen mesquite smoked wings. Tossed in your choice of sauce and server with ranch or bleu cheese.', 14.99);

    let sideTitle = document.createElement('h3');
    sideTitle.innerHTML = 'Sides';
    contentDiv.appendChild(sideTitle);

    createFoodItem('Mac n Cheese', 'Thicc, smoked, cheesey goodness.', 5.99);
    createFoodItem('Potatoe Salad', 'Our legendary homemade potatoe salad.', 3.99);
    createFoodItem('Coleslaw', 'Slaw, serve with everything and enjoy.', 4.99);
    createFoodItem('Smoked Baked Beans', 'Slow smoked baked beans', 4.99);
    createFoodItem('Corn Bread', 'Corn bread', 7.99);
    createFoodItem('French Fries', 'Handcut fries, served with our smoked ketchup.', 3.99);
}

function createFoodItem(name, desc, price){
    let foodDiv = document.createElement('div');
    let n = document.createElement('h3');
    n.innerHTML = name;
    let d = document.createElement('p');
    d.innerHTML = desc;
    let p = document.createElement('p');
    p.innerHTML = '$' + price;

    foodDiv.appendChild(n);
    foodDiv.appendChild(d);
    foodDiv.appendChild(p);

    contentDiv.appendChild(foodDiv);
}

export{
    createMenu
};
