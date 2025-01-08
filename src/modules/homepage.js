import restImage from '../images/restaurant.jpg'; 

export function loadHomepage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const image = document.createElement('img');
    image.src = restImage;
    image.alt = 'restaurant';
    content.appendChild(image);

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to Stoney's Restaurant";
    content.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo laboriosam eligendi tenetur, vitae quibusdam! Sed facilis, vel illo, qui pariatur necessitatibus officiis consequatur voluptatibus error architecto eius impedit consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo laboriosam eligendi tenetur, vitae quibusdam! Sed facilis, vel illo, qui pariatur necessitatibus office.";
    
    content.appendChild(p);
}