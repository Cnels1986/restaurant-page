function createContact(){
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';

    let address = document.createElement('p');
    address.innerHTML = `
        <h3>Address:</h3>
        <p>123 Fake St</p>
        <p>Columbia, PA 17512</p>
    `;
    contentDiv.appendChild(address);

    let contact = document.createElement('p');
    contact.innerHTML = `
        <h3>Contact Information:</h3>
        <h4>Phone: </h4> 717-123-4567
        <h4>Email: </h4> smokesesh@gmail.com
    `;
    contentDiv.appendChild(contact);

    let hours = document.createElement('div');
    hours.innerHTML = `
        <h3>Hours:</h3>
        <ul>
            <li>Monday: 3pm - 8pm</li>
            <li>Tuesday: 3pm - 8pm</li>
            <li>Wednesday: 3pm - 8pm</li>
            <li>Thursday: 3pm - 8pm</li>
            <li>Friday: 11am - 8pm</li>
            <li>Saturday: 11am - 8pm</li>
            <li>Sunday: 12pm - 7pm </li>
        </ul>
    `;
    contentDiv.appendChild(hours);
}

export{
    createContact
};
