/* Show #nav bar after #unofficial banner leaves the viewport */
new IntersectionObserver(([unofficial, ..._]) => {
  const nav = document.getElementById("nav");

  if (unofficial.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));

/* Replay animation when #hero image is clicked */
document.getElementById("hero").addEventListener("click", function (_) {
  this.getAnimations({ subtree: true }).forEach(animation => {
    animation.play();
  });
});
