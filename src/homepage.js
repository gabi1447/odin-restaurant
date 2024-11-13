import logo from './burger-logo.jpg';

export function generateHomepage() {
    const content = document.getElementById('content');
    
    const descriptionText = "At Pacheco's, we believe every bite should be unforgettable. Our burgers are crafted with the freshest ingredients, juicy patties, and a perfect blend of flavors that’ll leave you craving more. Whether you’re a fan of classic cheeseburgers or adventurous flavors, each burger is made to order with love and care. Come experience the joy of a truly delicious burger and let us make your meal the highlight of your day!"
    
    // Heading
    const heading = generateHeading();
    content.appendChild(heading);

    // Logo Headline
    const logoHeadline = generateLogoHeadline();
    content.appendChild(logoHeadline);

    // TextDescription
    const burgerText = document.createElement("p");
    burgerText.classList.add('burgerText');
    burgerText.innerText = descriptionText;

    content.appendChild(burgerText);
}

function generateHeading() {
    const restaurantName = "Pacheco's";

    // Heading
    const burgerHeading = document.createElement('h1');
    burgerHeading.innerText = restaurantName;
    return burgerHeading;
}

function generateLogoHeadline() {
    const headlineText = "Bite into Happiness!";

    // LogoHeadline
    const logoHeadline = document.createElement('div');
    logoHeadline.classList.add('logoHeadline');

        // Logo
    const logoImg = document.createElement("img");
    logoImg.classList.add('logo');
    logoImg.src = logo;
    logoHeadline.appendChild(logoImg)

        // Headline
    const headline = document.createElement("h2");
    headline.innerText = headlineText;
    logoHeadline.appendChild(headline);

    return logoHeadline;
}