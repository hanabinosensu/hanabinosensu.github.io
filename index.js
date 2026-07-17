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

  if (now < Date.parse("2026-07-18T00:00+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">よさこい祭りin光が丘公園 （07/18,19）</a>`;
  } else if (now < Date.parse("2026-07-18T10:00+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">よさこい祭りin光が丘公園 （本日）</a>`;
  } else if (now < Date.parse("2026-07-18T12:35+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">YOSAKOIステージ （12:30）</a>`;
  } else if (now < Date.parse("2026-07-18T13:29+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">ふれあいの径 （13:24）</a>`;
  } else if (now < Date.parse("2026-07-18T14:23+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">いちょう並木 （14:18）</a>`;
  } else if (now < Date.parse("2026-07-18T15:47+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">YOSAKOIステージ （15:42）</a>`;
  } else if (now < Date.parse("2026-07-19T00:00+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">ふれあいの径 （翌日 10:24）</a>`;
  } else if (now < Date.parse("2026-07-19T10:29+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">ふれあいの径 （10:24）</a>`;
  } else if (now < Date.parse("2026-07-19T13:29+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">YOSAKOIステージ （13:24）</a>`;
  } else if (now < Date.parse("2026-07-19T15:29+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">いちょう並木 （15:24）</a>`;
  } else if (now < Date.parse("2026-07-20T00:00+09:00")) {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">よさこい祭りin光が丘公園 （本日）</a>`;
  } else {
    next.innerHTML = `次: <a href="#hikarigaoka-2026">よさこい祭りin光が丘公園 （07/18,19）</a>`;
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
