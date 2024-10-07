function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.classList.contains('open')) {
        menu.classList.remove('open'); // סגור את התפריט אם הוא פתוח
    } else {
        menu.classList.add('open'); // פתח את התפריט אם הוא סגור
    }
}
