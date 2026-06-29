// Lightweight enhancement for GitHub Pages.
// Highlights current table-of-contents section without blocking rendering.

const tocLinks = [...document.querySelectorAll(".toc a")];
const sections = tocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 130;
  let currentId = sections[0]?.id;

  for (const section of sections) {
    if (section.offsetTop <= scrollPosition) {
      currentId = section.id;
    }
  }

  tocLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
