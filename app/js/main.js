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
      const offsetTop = targetSection.getBoundingClientRect().top + currentScrollPos - 30;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});