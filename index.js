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

  if (now < Date.parse("2026-08-29T08:00+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">原宿表参道元氣祭 （08/29–30）</a>`;
  } else if (now < Date.parse("2026-08-29T11:25+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">NHK前ストリート （11:20）</a>`;
  } else if (now < Date.parse("2026-08-29T13:47+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">神宮会館ステージ （13:42）</a>`;
  } else if (now < Date.parse("2026-08-29T16:05+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">原宿口ステージ （16:00）</a>`;
  } else if (now < Date.parse("2026-08-29T18:11+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">代々木公園ステージ （18:06）</a>`;
  } else if (now < Date.parse("2026-08-30T08:00+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">原宿表参道元氣祭 （08/29–30）</a>`;
  } else if (now < Date.parse("2026-08-30T11:30+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">表参道アヴェニュー （11:20）</a>`;
  } else if (now < Date.parse("2026-08-30T12:59+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">代々木公園 BE STAGE （12:54）</a>`;
  } else if (now < Date.parse("2026-08-30T16:23+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">代々木公園ステージ （16:18）</a>`;
  } else if (now < Date.parse("2026-08-30T18:00+09:00")) {
    next.innerHTML = `次: <a href="#harajuku-2026">原宿表参道元氣祭 （08/29–30）</a>`;
  } else {
    next.innerHTML = `次: にいがた総踊り （09/20–21）`;
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
