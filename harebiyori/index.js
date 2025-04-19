/*
 * Make #nav bar opaque when it hits the top border of the viewport, or
 * in other words, when #notice banner leaves the viewport.
 */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.add("off");
  } else {
    nav.classList.remove("off");
  }
}, {}).observe(document.getElementById("notice"));
