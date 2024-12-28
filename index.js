/*
 * Make #nav bar opaque when it hits the top border of the viewport, or
 * in other words, when #notice banner leaves the viewport.
 */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
}, {}).observe(document.getElementById("notice"));

/* Show #goto-stickers button when #schedule section enters viewport */
new IntersectionObserver((entries, _) => {
  if (entries[0].isIntersecting) {
    document.getElementById("goto-stickers").classList.add("shown");
  }
}, {}).observe(document.getElementById("schedule"));

/*
 * Hide #goto-stickers button when upper 200px of the #stickers section
 * becomes visible.
 */
new IntersectionObserver((entries, _) => {
  if (entries[0].isIntersecting) {
    document.getElementById("goto-stickers").classList.remove("shown");
  }
}, { rootMargin: "0px 0px -200px 0px" }).observe(document.getElementById("stickers"));
