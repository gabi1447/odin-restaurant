export function generateMenupage() {
    const mainContent = document.getElementById('content');
    content.className = 'menu-content';

    const menuHeading = document.createElement('h1');
    menuHeading.innerText = "Menu";

    mainContent.appendChild(menuHeading);
}