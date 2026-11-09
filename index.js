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

  if (now < Date.parse("2026-11-06T19:00+09:00")) {
    next.innerHTML = `次: <a href="#wasedaeve-2026">前夜祭 2026 （11/06）</a>`;
  } else if (now < Date.parse("2026-11-07T10:00+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">早稲田祭 2026 （11/07–08）</a>`;
  } else if (now < Date.parse("2026-11-07T13:50+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">小野講堂 （13:05）</a>`;
  } else if (now < Date.parse("2026-11-07T17:20+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">パレード （16:30）</a>`;
  } else if (now < Date.parse("2026-11-07T17:45+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">Goal Fes. （17:20）</a>`;
  } else if (now < Date.parse("2026-11-08T08:00+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">早稲田祭 2026 （11/07–08）</a>`;
  } else if (now < Date.parse("2026-11-08T12:05+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">戸山カフェテリア （11:25）</a>`;
  } else if (now < Date.parse("2026-11-08T15:40+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">理工展屋外ステージ （14:50）</a>`;
  } else if (now < Date.parse("2026-11-08T18:00+09:00")) {
    next.innerHTML = `次: <a href="#wasedasai-2026">早稲田祭 2026 （11/07–08）</a>`;
  } else {
    next.innerHTML = `次: 沼津秋祭り （11/22–23）`;
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
