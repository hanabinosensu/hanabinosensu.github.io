/* Show #nav bar only after #unofficial banner leaves the viewport */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Let users to choose video for #mustsee */
const mustseeSelect = document.getElementById("mustsee-select");

mustseeSelect.addEventListener("change", _ => {
  document.getElementById("mustsee-iframe").src = mustseeSelect.value;
});

/* Recommend video randomly */
mustseeSelect.selectedIndex = Math.floor(Math.random() * mustseeSelect.length);
mustseeSelect.dispatchEvent(new Event("change"));
