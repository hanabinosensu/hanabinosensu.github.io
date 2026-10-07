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

  if (now < Date.parse("2026-10-09T13:00+09:00")) {
    next.innerHTML = `次: <a href="#museumlive-2026">Museum LIVE 2026 （10/09）</a>`;
  } else if (now < Date.parse("2026-10-10T08:00+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">東京よさこい祭り （10/10–11）</a>`;
  } else if (now < Date.parse("2026-10-10T10:41+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">池袋西口公園 （かみはかり） （10:36）</a>`;
  } else if (now < Date.parse("2026-10-10T15:59+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">駅前メイン （15:54）</a>`;
  } else if (now < Date.parse("2026-10-10T16:23+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">池袋西口公園 （16:18）</a>`;
  } else if (now < Date.parse("2026-10-10T16:59+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">アゼリア通り （かみはかり） （16:54）</a>`;
  } else if (now < Date.parse("2026-10-10T17:11+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">アゼリア通り （17:06）</a>`;
  } else if (now < Date.parse("2026-10-10T17:29+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">駅前メイン （かみはかり） （17:24）</a>`;
  } else if (now < Date.parse("2026-10-11T08:00+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">東京よさこい祭り （10/10–11）</a>`;
  } else if (now < Date.parse("2026-10-11T10:41+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">池袋西口公園 （10:36）</a>`;
  } else if (now < Date.parse("2026-10-11T11:05+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">駅前メイン （11:00）</a>`;
  } else if (now < Date.parse("2026-10-11T11:41+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">四商店街 （11:36）</a>`;
  } else if (now < Date.parse("2026-10-11T17:17+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">アゼリア通り （17:12）</a>`;
  } else if (now < Date.parse("2026-10-11T17:59+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">駅前メイン （17:54）</a>`;
  } else if (now < Date.parse("2026-10-11T20:00+09:00")) {
    next.innerHTML = `次: <a href="#tokyo-2026">東京よさこい祭り （10/10–11）</a>`;
  } else {
    next.innerHTML = `次: 所沢キャンパス祭 （10/25）`;
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
