/* Show #nav bar after #topics leaves the viewport */
new IntersectionObserver(([topics, ..._]) => {
  const nav = document.getElementById("nav");

  if (topics.isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
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

  if (now < Date.parse("2026-03-21T00:00+09:00")) {
    console.error("now < Date.parse('2026-03-21T00:00+09:00')");
  } else if (now < Date.parse("2026-03-22T00:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#utsunomiya-2026">宇都宮よさこい祭（03/22）</a>`;
  } else if (now < Date.parse("2026-03-22T10:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#utsunomiya-2026">宇都宮よさこい祭（本日）</a>`;
  } else if (now < Date.parse("2026-03-22T12:13+09:00")) {
    next.innerHTML = `次の演舞: <a href="#utsunomiya-2026">ライトキューブ宇都宮大ホール（12:08）</a>`;
  } else if (now < Date.parse("2026-03-22T13:49+09:00")) {
    next.innerHTML = `次の演舞: <a href="#utsunomiya-2026">宮みらいライトヒル 一回目（13:44）</a>`;
  } else if (now < Date.parse("2026-03-22T15:19+09:00")) {
    next.innerHTML = `次の演舞: <a href="#utsunomiya-2026">宮みらいライトヒル 二回目（15:14）</a>`;
  } else if (now < Date.parse("2026-03-22T19:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#utsunomiya-2026">宇都宮よさこい祭（本日）</a>`;
  } else if (now < Date.parse("2026-04-05T19:00+09:00")) {
    next.innerHTML = `次のお祭り: <a href="#sakuyosa-2026">京都さくらよさこい（04/04,05）</a>`;
  } else {
    console.error("now >= Date.parse('2026-04-05T19:00+09:00')");
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
const select = document.querySelector("#pickup select");

select.addEventListener("change", _ => {
  document.querySelector("#pickup iframe").src = select.value;
});

/* Choose initial #pickup video randomly */
select.selectedIndex = Math.floor(Math.random() * select.length);
select.dispatchEvent(new Event("change"));
