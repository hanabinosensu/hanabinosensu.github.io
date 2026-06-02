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

  if (now < Date.parse("2026-06-02T00:00+09:00")) {
    console.error(`now < Date.parse("2026-06-02T00:00+09:00")`);
  } else if (now < Date.parse("2026-06-03T00:00+09:00")) {
    next.innerHTML = `<a href="#shonan-2026">湘南よさこい</a>まであと5日 （06/07）`;
  } else if (now < Date.parse("2026-06-04T00:00+09:00")) {
    next.innerHTML = `<a href="#shonan-2026">湘南よさこい</a>まであと4日 （06/07）`;
  } else if (now < Date.parse("2026-06-05T00:00+09:00")) {
    next.innerHTML = `<a href="#shonan-2026">湘南よさこい</a>まであと3日 （06/07）`;
  } else if (now < Date.parse("2026-06-06T00:00+09:00")) {
    next.innerHTML = `<a href="#shonan-2026">湘南よさこい</a>まであと2日 （06/07）`;
  } else if (now < Date.parse("2026-06-07T00:00+09:00")) {
    next.innerHTML = `<a href="#shonan-2026">湘南よさこい</a>まであと1日 （06/07）`;
  } else if (now < Date.parse("2026-06-07T10:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#shonan-2026">第21回湘南よさこい祭り （本日）</a>`;
  } else if (now < Date.parse("2026-06-07T12:56+09:00")) {
    next.innerHTML = `次の演舞: <a href="#shonan-2026">ストリート演舞 （12:51）</a>`;
  } else if (now < Date.parse("2026-06-07T15:15+09:00")) {
    next.innerHTML = `次の演舞: <a href="#shonan-2026">ステージ演舞 （15:10）</a>`;
  } else if (now < Date.parse("2026-06-07T17:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#shonan-2026">第21回湘南よさこい祭り （本日）</a>`;
  } else if (now < Date.parse("2026-06-18T00:00+09:00")) {
    next.innerHTML = `次のお祭り: よさこい×和太鼓パフォーマンス （06/17）`;
  } else {
    console.error(`now >= Date.parse("2026-06-18T00:00+09:00")`);
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
