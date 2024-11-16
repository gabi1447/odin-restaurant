import logo from './burger-logo.jpg';

export function generateHomepage() {
    const content = document.getElementById('content');
    content.className = 'home-content';
        
    const heading = generateHeading();
    content.appendChild(heading);

    const logoHeadline = generateLogoHeadline();
    content.appendChild(logoHeadline);

    const restaurantDescription = generateDescription();
    content.appendChild(restaurantDescription);
}

function generateHeading() {
    const restaurantName = "Pacheco's";

    const burgerHeading = document.createElement('h1');
    burgerHeading.classList.add('restaurantHeading');
    burgerHeading.innerText = restaurantName;
    return burgerHeading;
}

function generateLogoHeadline() {
    const headlineText = "Bite into Happiness!";

    const logoHeadline = document.createElement('div');
    logoHeadline.classList.add('logoHeadline');

    const logoImg = document.createElement("img");
    logoImg.classList.add('logo');
    logoImg.src = logo;
    logoHeadline.appendChild(logoImg)

    const headline = document.createElement("h2");
    headline.classList.add('headline');
    headline.innerText = headlineText;
    logoHeadline.appendChild(headline);

    return logoHeadline;
}

function generateDescription() {
    const description = "At Pacheco's, we believe every bite should be unforgettable. Our burgers are crafted with the freshest ingredients, juicy patties, and a perfect blend of flavors that’ll leave you craving more. Whether you’re a fan of classic cheeseburgers or adventurous flavors, each burger is made to order with love and care. Come experience the joy of a truly delicious burger and let us make your meal the highlight of your day!"

    const restaurantDescription = document.createElement("p");
    restaurantDescription.classList.add('restaurantDescription');
    restaurantDescription.innerText = description;

    return restaurantDescription;
}