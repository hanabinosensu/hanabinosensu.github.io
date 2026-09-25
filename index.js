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

  if (now < Date.parse("2026-09-26T10:00+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">富山のよさこい祭り （09/26–27）</a>`;
  } else if (now < Date.parse("2026-09-26T13:22+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址公園ステージ （13:17）</a>`;
  } else if (now < Date.parse("2026-09-26T14:23+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址大通り西側パレード （14:18）</a>`;
  } else if (now < Date.parse("2026-09-26T15:30+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">市役所前パレード （15:25）</a>`;
  } else if (now < Date.parse("2026-09-26T16:07+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址大通り東側パレード （16:02）</a>`;
  } else if (now < Date.parse("2026-09-26T17:35+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址公園ステージ （17:30）</a>`;
  } else if (now < Date.parse("2026-09-26T18:50+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">県民会館前パレード （18:45）</a>`;
  } else if (now < Date.parse("2026-09-26T20:37+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址大通り西側パレード （20:32）</a>`;
  } else if (now < Date.parse("2026-09-27T07:00+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">富山のよさこい祭り （09/26–27）</a>`;
  } else if (now < Date.parse("2026-09-27T10:16+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">県民会館大ホール （10:11）</a>`;
  } else if (now < Date.parse("2026-09-27T12:16+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址大通り東側パレード （12:11）</a>`;
  } else if (now < Date.parse("2026-09-27T14:33+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址大通り西側パレード （14:28）</a>`;
  } else if (now < Date.parse("2026-09-27T16:41+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址公園ステージ （16:36）</a>`;
  } else if (now < Date.parse("2026-09-27T19:35+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">市役所光の広場 （19:30）</a>`;
  } else if (now < Date.parse("2026-09-27T20:05+09:00")) {
    next.innerHTML = `次: <a href="#toyama-2026">城址公園ステージ （20:00）</a>`;
  } else {
    next.innerHTML = `次: 前月祭 2026 （10/02）`;
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
