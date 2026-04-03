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

/* Live update #next */
document.getElementById("next").addEventListener("animationstart", e => {
  const next = e.target;
  const now = Date.now();

  if (now < Date.parse("2026-04-04T00:00+09:00")) {
    console.error(`now < Date.parse("2026-04-04T00:00+09:00")`);
  } else if (now < Date.parse("2026-04-04T10:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#sakuyosa-2026">京都さくらよさこい（今日と明日）</a>`;
  } else if (now < Date.parse("2026-04-04T12:41+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">梅小路（12:36）</a>`;
  } else if (now < Date.parse("2026-04-04T14:05+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">京都駅（14:00）</a>`;
  } else if (now < Date.parse("2026-04-04T15:47+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">神宮道南（15:42）</a>`;
  } else if (now < Date.parse("2026-04-04T16:53+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">神宮道北（16:48）</a>`;
  } else if (now < Date.parse("2026-04-05T00:00+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">二条城（明日 11:42）</a>`;
  } else if (now < Date.parse("2026-04-05T11:47+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">二条城（11:42）</a>`;
  } else if (now < Date.parse("2026-04-05T13:23+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">神宮道北（13:18）</a>`;
  } else if (now < Date.parse("2026-04-05T15:05+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">梅小路（15:00）</a>`;
  } else if (now < Date.parse("2026-04-05T17:17+09:00")) {
    next.innerHTML = `次の演舞: <a href="#sakuyosa-2026">神宮道南（17:12）</a>`;
  } else if (now < Date.parse("2026-04-05T19:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#sakuyosa-2026">京都さくらよさこい（今日）</a>`;
  } else if (now < Date.parse("2026-04-09T19:00+09:00")) {
    next.innerHTML = `次のお祭り: 早大合同新歓公演 “頂”（04/09）</a>`;
  } else {
    console.error(`now >= Date.parse("2026-04-09T19:00+09:00")`);
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
