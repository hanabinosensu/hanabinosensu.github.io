/* Show #nav iff window height >= 420px and #topics is outside viewport */
const debounce = f => { let t; return () => { clearTimeout(t); t = setTimeout(f, 50); }; };

window.addEventListener("resize", debounce(() => {
  const nav = document.getElementById("nav");
  const topics = document.getElementById("topics");

  if (window.innerHeight < 420) {
    nav.style.top = "";  // hide
  } else if (topics.getBoundingClientRect().bottom > 0) {
    nav.style.top = "";  // hide
  } else {
    nav.style.top = "0px";  // show
  }
}));

new IntersectionObserver(entries => {
  const nav = document.getElementById("nav");
  const topics = entries[0];

  if (window.innerHeight < 420) {
    nav.style.top = "";  // hide
  } else if (topics.isIntersecting) {
    nav.style.top = "";  // hide
  } else {
    nav.style.top = "0px";  // show
  }
}, {}).observe(document.getElementById("topics"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Infinite #topics slideshow */
document.getElementById("topics").scrollTo(0, 0);

document.querySelectorAll("#topics li").forEach((li, i, lis) => {
  const topics = document.getElementById("topics");
  const next = lis.item((i + 1) % lis.length);

  li.addEventListener("animationend", _ => {
    topics.scrollTo({ top: next.offsetTop, behavior: "instant" });
    next.getAnimations().forEach(animation => animation.play());
  });
});

document.querySelector("#topics li").getAnimations().forEach(animation => {
  animation.play();
});

/* Let users to choose video for #pickup */
const select = document.querySelector("#pickup select");

select.addEventListener("change", _ => {
  document.querySelector("#pickup iframe").src = select.value;
});

/* Choose initial #pickup video randomly */
select.selectedIndex = Math.floor(Math.random() * select.length);
select.dispatchEvent(new Event("change"));
