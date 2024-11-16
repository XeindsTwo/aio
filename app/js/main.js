import {setupMobileMenu} from './mobileMenu.js';

setupMobileMenu();

document.querySelectorAll(".desktop").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    link.blur();

    const header = document.querySelector(".header");
    header.classList.remove('scroll');

    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const currentScrollPos = window.scrollY;
      const headerHeight = header ? header.offsetHeight : 0;
      const offsetTop = targetSection.getBoundingClientRect().top + currentScrollPos - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});