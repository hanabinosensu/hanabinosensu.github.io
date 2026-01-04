/* Show #nav bar after #topics leaves the viewport */
new IntersectionObserver(([topics, ..._]) => {
  const nav = document.getElementById("nav");

  if (topics.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("topics"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Infinite #topics slideshow */
document.getElementById("topics").scrollTo(0, 0);

document.querySelectorAll("#topics li").forEach((li, i, lis) => {
  li.addEventListener("animationend", _ => {
    const topics = document.getElementById("topics");
    const next = lis.item((i + 1) % lis.length);

    topics.scrollTo({
      top: next.offsetTop - topics.offsetTop,
      behavior: "instant",
    });

    next.getAnimations().forEach(animation => animation.play());
  });
});

document.querySelector("#topics li").getAnimations().forEach(animation => {
  animation.play();
});
