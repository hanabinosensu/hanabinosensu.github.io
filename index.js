/* Show #nav iff window height >= 420px and #topics is outside viewport */
window.matchMedia("(height < 420px)").addEventListener("change", e => {
  const nav = document.getElementById("nav");
  const topics = document.getElementById("topics");

  if (e.matches) {
    nav.style.top = "";  // hide
  } else if (topics.getBoundingClientRect().bottom > 0) {
    nav.style.top = "";  // hide
  } else {
    nav.style.top = "0px";  // show
  }
});

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

/* Unattended update #next */
document.getElementById("next").addEventListener("animationstart", e => {
  const next = e.target;
  const now = Date.now();

  if (now < Date.parse("2026-06-16T00:00+09:00")) {
    console.error(`now < Date.parse("2026-06-16T00:00+09:00")`);
  } else if (now < Date.parse("2026-06-17T19:00+09:00")) {
    next.innerHTML = `次: <a href="#yosakoixwadaiko-2026">よさこい×和太鼓パフォーマンス （06/17）</a>`;
  } else if (now < Date.parse("2026-06-26T19:30+09:00")) {
    next.innerHTML = `次: <a href="#getappers-mugen">下駄単独公演『夢幻』コラボ （06/26）</a>`;
  } else if (now < Date.parse("2026-07-19T20:00+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">よさこい祭りin光が丘公園 （07/18,19）</a>`;
  } else {
    console.error(`now >= Date.parse("2026-07-19T20:00+09:00")`);
  }
});

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

/* Replay animation when #hero image is clicked */
document.getElementById("hero").addEventListener("click", function (_) {
  this.getAnimations({ subtree: true }).forEach(animation => {
    animation.play();
  });
});

/* Let users to choose video for #pickup */
const pickup = {
  select: document.getElementById("pickup-select"),
  iframe: document.getElementById("pickup-iframe"),
};

pickup.select.addEventListener("change", _ => {
  pickup.iframe.src = pickup.select.value;
});

pickup.select.selectedIndex = Math.floor(Math.random() * pickup.select.length);
pickup.select.dispatchEvent(new Event("change"));
