
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

// Open and close the menu
if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        menuButton.textContent = isOpen ? "✖" : "☰";
        menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}

// Display current year
const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Display last modified date
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}
