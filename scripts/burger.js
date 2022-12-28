var hamButton = document.querySelector(".container");
var hamMenu = document.querySelector(".ham-menu");

function toggleMenu() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    hamMenu.classList.toggle("ham-menu-background");
    hamMenu.classList.toggle("show-ham-menu");
}

function closemenu() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        hamMenu.classList.remove("ham-menu-background");
        hamMenu.classList.remove("show-ham-menu");
    }
}

hamButton.addEventListener("click", toggleMenu);
window.addEventListener("scroll", closemenu);
