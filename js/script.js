// Global elements object
const uiElements = {
    menuBars: document.getElementById('menu-bars'),
    overlay: document.getElementById('overlay'),
    navItems: Array.from(document.getElementsByTagName('li'))
}

// Slide nav elements (to direction, from direction)
const slideNavItems = (d1, d2) => {
    for (let i = 0; i < uiElements.navItems.length; i++) {
        uiElements.navItems[i].classList.remove(`slide-${d2}-${i + 1}`)
        uiElements.navItems[i].classList.add(`slide-${d1}-${i + 1}`)
    }
}
// Function to toggle menu
function toggleNavbar(e) {
    uiElements.menuBars.classList.toggle('change');
    uiElements.overlay.classList.toggle('change');
    if (uiElements.navItems[0].classList.contains('slide-in-1')) {
        slideNavItems('out', 'in');
    } else {
        slideNavItems('in', 'out');
    }
}

// Added Event Listener
uiElements.menuBars.addEventListener('click', toggleNavbar)
uiElements.navItems.forEach(item => {
    item.addEventListener('click', toggleNavbar)
})