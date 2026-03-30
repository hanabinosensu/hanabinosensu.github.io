/* Show #nav iff window height >= 420px and #unofficial is outside viewport */
window.matchMedia("(height < 420px)").addEventListener("change", e => {
  const nav = document.getElementById("nav");
  const unofficial = document.getElementById("unofficial");

  if (e.matches) {
    nav.style.top = "";  // hide
  } else if (unofficial.getBoundingClientRect().bottom > 0) {
    nav.style.top = "";  // hide
  } else {
    nav.style.top = "0px";  // show
  }
});

new IntersectionObserver(entries => {
  const nav = document.getElementById("nav");
  const unofficial = entries[0];

  if (window.innerHeight < 420) {
    nav.style.top = "";  // hide
  } else if (unofficial.isIntersecting) {
    nav.style.top = "";  // hide
  } else {
    nav.style.top = "0px";  // show
  }
}, {}).observe(document.getElementById("unofficial"));

/* Replay animation when h1 tag is clicked */
document.querySelector("h1").addEventListener("click", e => {
  e.target.getAnimations({ subtree: true }).forEach(animation => {
    animation.play();
  });
});
