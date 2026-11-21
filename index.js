/* Show #header iff window height >= 420px and #topics is outside viewport */
window.matchMedia("(height < 420px)").addEventListener("change", e => {
  const header = document.getElementById("header");
  const topics = document.getElementById("topics");

  if (e.matches) {
    header.style.top = "";  // hide
  } else if (topics.getBoundingClientRect().bottom > 0) {
    header.style.top = "";  // hide
  } else {
    header.style.top = "0px";  // show
  }
});

new IntersectionObserver(entries => {
  const header = document.getElementById("header");
  const topics = entries[0];

  if (window.innerHeight < 420) {
    header.style.top = "";  // hide
  } else if (topics.isIntersecting) {
    header.style.top = "";  // hide
  } else {
    header.style.top = "0px";  // show
  }
}, {}).observe(document.getElementById("topics"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Live update #next */
document.getElementById("next").addEventListener("animationstart", e => {
  const next = e.target;
  const now = Date.now();

  if (now < Date.parse("2026-11-22T10:00+09:00")) {
    next.innerHTML = `次: <a href="#numazu-2026">よさこい東海道 （11/22）</a>`;
  } else if (now < Date.parse("2026-11-22T13:28+09:00")) {
    next.innerHTML = `次: <a href="#numazu-2026">上本通り演舞場 （13:18）</a>`;
  } else if (now < Date.parse("2026-11-22T14:28+09:00")) {
    next.innerHTML = `次: <a href="#numazu-2026">上本通り演舞場 （14:18）</a>`;
  } else if (now < Date.parse("2026-11-22T15:31+09:00")) {
    next.innerHTML = `次: <a href="#numazu-2026">かのがわパーク （15:26）</a>`;
  } else if (now < Date.parse("2026-11-22T16:30+09:00")) {
    next.innerHTML = `次: <a href="#numazu-2026">アーケード名店街演舞場 （16:20）</a>`;
  } else if (now < Date.parse("2026-11-22T17:58+09:00")) {
    next.innerHTML = `次: <a href="#numazu-2026">かのがわパーク （17:53）</a>`;
  } else {
    next.innerHTML = `次: <a href="#numazu-2026">よさこい東海道 （11/22）</a>`;
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
