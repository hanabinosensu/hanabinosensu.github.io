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

  if (now < Date.parse("2026-09-20T10:00+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">にいがた総踊り （09/20–21）</a>`;
  } else if (now < Date.parse("2026-09-20T12:47+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">新潟ふるさと村 （12:42）</a>`;
  } else if (now < Date.parse("2026-09-20T15:35+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">万代シテイ十字路 （15:30）</a>`;
  } else if (now < Date.parse("2026-09-20T17:35+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">万代2Fシーキューブ未来広場 （17:30）</a>`;
  } else if (now < Date.parse("2026-09-21T09:00+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">にいがた総踊り （09/20–21）</a>`;
  } else if (now < Date.parse("2026-09-21T12:05+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">万代テラス （12:00）</a>`;
  } else if (now < Date.parse("2026-09-21T14:05+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">ばかうけ展望室 （14:00）</a>`;
  } else if (now < Date.parse("2026-09-21T16:05+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">万代シテイ十字路 （16:00）</a>`;
  } else if (now < Date.parse("2026-09-21T22:00+09:00")) {
    next.innerHTML = `次: <a href="#niigata-2026">にいがた総踊り （09/20–21）</a>`;
  } else {
    next.innerHTML = `次: <a href="#toyama-2026">富山のよさこい祭り （09/26–27）</a>`;
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
