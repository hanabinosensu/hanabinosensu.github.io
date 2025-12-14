/* Show #nav bar after #unofficial banner leaves the viewport */
new IntersectionObserver(([unofficial, ..._]) => {
  const nav = document.getElementById("nav");

  if (unofficial.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));

/* Replay animation when h1 tag is clicked */
document.querySelector("h1").addEventListener("click", e => {
  e.target.getAnimations({ subtree: true }).forEach(animation => {
    animation.play();
  });
});
