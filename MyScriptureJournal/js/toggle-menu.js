// Toggles the menu - reference from Sliding Menu assignment in WDD331 Advanced CSS
function toggleNav() {
    var slideNav = document.getElementById("menu-list");
    // toggle adds a class if it's not there or removes it if it is.
    slideNav.classList.toggle("open");
}

// Toggles the classes of the menu icon, which will change between the hamburger and X icons
function hamSwitch(x) {
    x.classList.toggle("ham-switch");
}