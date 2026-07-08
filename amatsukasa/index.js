/* Show #header iff window height >= 420px and #unofficial is outside viewport */
window.matchMedia("(height < 420px)").addEventListener("change", e => {
  const header = document.getElementById("header");
  const unofficial = document.getElementById("unofficial");

  if (e.matches) {
    header.style.top = "";  // hide
  } else if (unofficial.getBoundingClientRect().bottom > 0) {
    header.style.top = "";  // hide
  } else {
    header.style.top = "0px";  // show
  }
});

new IntersectionObserver(entries => {
  const header = document.getElementById("header");
  const unofficial = entries[0];

  if (window.innerHeight < 420) {
    header.style.top = "";  // hide
  } else if (unofficial.isIntersecting) {
    header.style.top = "";  // hide
  } else {
    header.style.top = "0px";  // show
  }
}, {}).observe(document.getElementById("unofficial"));

/* Replay animation when #hero image is clicked */
document.getElementById("hero").addEventListener("click", function (_) {
  this.getAnimations({ subtree: true }).forEach(animation => {
    animation.play();
  });
});
