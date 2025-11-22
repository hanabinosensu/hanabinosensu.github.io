/* Show #nav bar after #pickup leaves the viewport */
new IntersectionObserver(([pickup, ..._]) => {
  const nav = document.getElementById("nav");

  if (pickup.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("pickup"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Show next event and stage in #next */
document.getElementById("next").addEventListener("animationstart", e => {
  const next = e.target;
  const now = Date.now();

  if (now < Date.parse("2025-11-23T00:00+09:00")) {
    console.error("now < Date.parse('2025-11-23T00:00+09:00')");
  } else if (now < Date.parse("2025-11-23T11:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#kuroshio-25">黒潮よさこい（本日）</a>`;
  } else if (now < Date.parse("2025-11-23T12:25+09:00")) {
    next.innerHTML = `次の演舞: <a href="#kuroshio-25">シンボルロード会場（12:20）</a>`;
  } else if (now < Date.parse("2025-11-23T13:25+09:00")) {
    next.innerHTML = `次の演舞: <a href="#kuroshio-25">市役所会場（13:20）</a>`;
  } else if (now < Date.parse("2025-11-23T14:25+09:00")) {
    next.innerHTML = `次の演舞: <a href="#kuroshio-25">利根川会場（14:20）</a>`;
  } else if (now < Date.parse("2025-11-23T19:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#kuroshio-25">黒潮よさこい（本日）</a>`;
  } else if (now < Date.parse("2025-12-15T00:00+09:00")) {
    next.innerHTML = `次のお祭り: バサラカーニバル（12/13–14）`;
  } else {
    console.error("now >= Date.parse('2025-12-15T00:00+09:00')");
  }
});

/* Infinite #pickup slideshow */
document.getElementById("pickup").scrollTo(0, 0);

document.querySelectorAll("#pickup li").forEach((li, i, lis) => {
  li.addEventListener("animationend", _ => {
    const pickup = document.getElementById("pickup");
    const next = lis.item((i + 1) % lis.length);

    pickup.scrollTo({
      top: next.offsetTop - pickup.offsetTop,
      behavior: "instant",
    });

    next.getAnimations().forEach(animation => animation.play());
  });
});

document.getElementById("next").getAnimations().forEach(animation => {
  animation.play();
});

/* Let users to choose video for #mustsee */
const mustseeSelect = document.getElementById("mustsee-select");

mustseeSelect.addEventListener("change", _ => {
  document.getElementById("mustsee-iframe").src = mustseeSelect.value;
});

/* Recommend video randomly */
mustseeSelect.selectedIndex = Math.floor(Math.random() * mustseeSelect.length);
mustseeSelect.dispatchEvent(new Event("change"));
