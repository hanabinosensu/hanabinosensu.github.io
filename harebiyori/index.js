/* Show #nav iff window height >= 420px and #unofficial is outside viewport */
const debounce = f => { let t; return () => { clearTimeout(t); t = setTimeout(f, 50); }; };

window.addEventListener("resize", debounce(() => {
  const nav = document.getElementById("nav");
  const unofficial = document.getElementById("unofficial");

  if (window.innerHeight < 420) {
    nav.style.top = "";  // hide
  } else if (unofficial.getBoundingClientRect().bottom > 0) {
    nav.style.top = "";  // hide
  } else {
    nav.style.top = "0px";  // show
  }
}));

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
