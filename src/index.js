import './styles.css';
import { generateHomepage } from './homepage.js';
import { generateMenupage } from './menu.js';
import { generateContactpage } from './contact.js';

function removeContent() {
    const divContent = document.getElementById('content');
    divContent.innerText = "";
}

// Generate content based on the nav button that was clicked.
const buttonsArray = ['home', 'menu', 'about'];
document.addEventListener('click', (event) => {
    const buttonId = event.target.id;
    if (buttonsArray.includes(buttonId)) {
        removeContent();
        switch (buttonId) {
            case "home":
                generateHomepage();
                break;
            case "menu":
                generateMenupage();
                break;
            case "about":
                generateContactpage();
                break;           
        }
    }
    console.log(event.target.id);
})

generateHomepage();