export function generateContactpage() {
    const mainContent = document.getElementById('content');

    const contactHeading = document.createElement('h1');
    contactHeading.innerText = "Contact";

    mainContent.appendChild(contactHeading);
}