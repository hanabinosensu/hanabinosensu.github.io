/* Show #nav bar after #unofficial banner leaves the viewport */
new IntersectionObserver(([unofficial, ..._]) => {
  const nav = document.getElementById("nav");

  if (unofficial.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));

/* Show #i18n banner if user understands Japanese */
if (navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Let users to choose video for #pickup */
const pickupSelect = document.getElementById("pickup-select");

pickupSelect.addEventListener("change", _ => {
  document.getElementById("pickup-iframe").src = pickupSelect.value;
});

/* Recommend video randomly */
pickupSelect.selectedIndex = Math.floor(Math.random() * pickupSelect.length);
pickupSelect.dispatchEvent(new Event("change"));
