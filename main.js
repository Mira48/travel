const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".content h1", {
    ...ScrollRevealOption,
});

ScrollReveal().reveal(".content h4", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content h2, .content h6, .content form", {
    ...ScrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".content p", {
    ...ScrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".content .socials span", {
    ...ScrollRevealOption,
    delay: 2000,
    interval: 500,
});




