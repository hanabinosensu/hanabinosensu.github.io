/* Show #nav bar after #unofficial banner leaves the viewport */
new IntersectionObserver(([unofficial, ..._]) => {
  const nav = document.getElementById("nav");

  if (unofficial.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Infinite #pickup slideshow */
document.getElementById("pickup").scrollTo(0, 0);

document.querySelectorAll("#pickup li").forEach((li, i, lis) => {
  li.addEventListener("animationend", _ => {
    const pickup = document.getElementById("pickup");
    const next = lis.item((i + 1) % lis.length);

    pickup.scrollTo({ top: next.offsetTop, behavior: "instant" });
    next.getAnimations().forEach(animation => animation.play());
  });
});

document.querySelector("#pickup li").getAnimations().forEach(animation => {
  animation.play();
});

/* Let users to choose video for #mustsee */
const mustseeSelect = document.getElementById("mustsee-select");

mustseeSelect.addEventListener("change", _ => {
  document.getElementById("mustsee-iframe").src = mustseeSelect.value;
});

/* Recommend video randomly */
mustseeSelect.selectedIndex = Math.floor(Math.random() * mustseeSelect.length);
mustseeSelect.dispatchEvent(new Event("change"));
