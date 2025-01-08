import samosaImage from '../images/samosas.jpg';
import pakoraImage from '../images/pakoras.jpg';
import choleImage from '../images/cholebhature.jpg'; 

export function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    
    const menu = document.createElement('div');
    menu.classList.add('menu');  
    menu.innerHTML = `
        <h2>Our Menu</h2>
        <div class="menu-item">
            <h3>Samosas</h3>
            <img src="${samosaImage}" class="menuImage" alt="Samosas">
            <p>A crispy, golden-brown pastry filled with a savory mixture of spiced potatoes, peas, and herbs. Perfect as a snack or appetizer, this popular dish is bursting with flavor in every bite.</p>
        </div>

        <div class="menu-item">
            <h3>Pakoras</h3>
            <img src="${pakoraImage}" class="menuImage" alt="Pakoras">
            <p>Delicious fritters made by dipping vegetables or paneer in a spiced gram flour batter and deep-frying until crispy. A perfect savory snack with a crunchy texture and bold flavors.</p>
        </div>

        <div class="menu-item">
            <h3>Chole Bhature</h3>
            <img src="${choleImage}" class="menuImage" alt="Chole Bhature">
            <p>A classic North Indian dish featuring spicy, tangy chickpea curry (chole) served with deep-fried, fluffy bread (bhature). A hearty and flavorful meal perfect for breakfast or lunch.</p>
        </div>
    `;

    content.appendChild(menu);
}