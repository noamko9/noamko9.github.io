// JavaScript code for handling menu toggle, if necessary

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle'); // If you plan to add a toggle button
    const nav = document.querySelector('aside nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});
