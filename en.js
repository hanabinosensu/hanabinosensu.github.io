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

/* Show #i18n banner if user understands Japanese */
if (navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Replay #hero image animation upon click */
document.getElementById("hero").addEventListener("click", function (_) {
  this.getAnimations({ subtree: true }).forEach(animation => {
    animation.play();
  });
});

/* Let users to choose video for #pickup */
const pickupSelect = document.getElementById("pickup-select");

pickupSelect.addEventListener("change", _ => {
  document.getElementById("pickup-iframe").src = pickupSelect.value;
});

/* Recommend video randomly */
pickupSelect.selectedIndex = Math.floor(Math.random() * pickupSelect.length);
pickupSelect.dispatchEvent(new Event("change"));
