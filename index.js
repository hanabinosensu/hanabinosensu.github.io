/*
 * Make #nav bar opaque when it hits the top border of the viewport, or
 * to put it differently, when the #unofficial banner leave the viewport.
 */
const onintersection = (entries, _) => {
  const nav = document.getElementById("nav");
  const entry = entries[0];

  if (entry.isIntersecting) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
}

const observer = new IntersectionObserver(onintersection, {});
observer.observe(document.getElementById("unofficial"));
