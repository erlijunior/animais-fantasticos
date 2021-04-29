export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll("[data-anime='menu'] a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  if (linksInternos.length) {

    linksInternos.forEach(link => {
      link.addEventListener("click", scrollToSection);
    });
  }
}