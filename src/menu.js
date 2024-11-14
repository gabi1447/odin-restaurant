export function generateMenupage() {
    const mainContent = document.getElementById('content');

    const menuHeading = document.createElement('h1');
    menuHeading.innerText = "Menu";

    mainContent.appendChild(menuHeading);
}