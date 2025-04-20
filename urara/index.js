/* Show #nav bar only after #notice banner leaves the viewport */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("notice"));
