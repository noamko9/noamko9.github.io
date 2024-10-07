document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Toggle Menu';
    menuToggle.style.position = 'fixed';
    menuToggle.style.top = '10px';
    menuToggle.style.left = '220px';
    document.body.appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        const aside = document.querySelector('aside');
        aside.style.display = aside.style.display === 'none' ? 'block' : 'none';
    });
});
