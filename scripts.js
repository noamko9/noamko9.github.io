function toggleMenu() {
    var sideMenu = document.getElementById("side-menu");
    var mainContent = document.getElementById("main-content");
    if (sideMenu.style.left === "0px") {
        sideMenu.style.left = "-250px"; // Hide menu
        mainContent.style.marginLeft = "0"; // Reset content margin
    } else {
        sideMenu.style.left = "0px"; // Show menu
        mainContent.style.marginLeft = "250px"; // Shift content to the right
    }
}
