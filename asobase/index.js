/* Show #nav bar after #unofficial banner leaves the viewport */
new IntersectionObserver(([unofficial, ..._]) => {
  const nav = document.getElementById("nav");

  if (unofficial.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));
