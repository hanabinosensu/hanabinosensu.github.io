/*
 * Make #nav bar opaque when it hits the top border of the viewport, or
 * in other words, when #notice banner leaves the viewport.
 */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.add("off");
  } else {
    nav.classList.remove("off");
  }
}, {}).observe(document.getElementById("notice"));

/* Expand #discography in phases */
document.getElementById("discography").style.height = "800px";
document.getElementById("expand800").style.display = "block";

document.getElementById("expand800").addEventListener("click", _ => {
  document.getElementById("discography").style.height = "3000px";
  document.getElementById("expand800").style.display = "";
  document.getElementById("expand3000").style.display = "block";
});

document.getElementById("expand3000").addEventListener("click", _ => {
  document.getElementById("discography").style.height = "";
  document.getElementById("expand3000").style.display = "";
});

/* Choose a video for #random */
document.getElementById("random").src = [
  "https://www.youtube.com/embed/RwByT1_VnTo",  // 天つかさ（湘南よさこい）
  "https://www.youtube.com/embed/PctZc6cfDzU",  // 天つかさ（音源）
  "https://www.youtube.com/embed/uwIHyLPBZkY",  // はれびより（湘南よさこい）
  "https://www.youtube.com/embed/bVmuQT03h98",  // うらら（お披露目）
  "https://www.youtube.com/embed/161C9dMftYY",  // うらら（MV）
  "https://www.youtube.com/embed/_rfaaXVZsDI",  // 千斗星（お披露目）
  "https://www.youtube.com/embed/x61mAbUGrAs",  // 千斗星（音源）
  "https://www.youtube.com/embed/quxty9_wvWo",  // かみはかり（お披露目）
  "https://www.youtube.com/embed/FZO-hpCalVA",  // あそばせ（如月祭）
  "https://www.youtube.com/embed/1kQywIIlc64",  // ハヰカラ（湘南よさこい）
  "https://www.youtube.com/embed/y5zAVQ9xUmI",  // 舞灯籠（東京よさこい）
  "https://www.youtube.com/embed/OVwaCNvhlqI",  // 舞灯籠（音源）
  "https://www.youtube.com/embed/yJ-M7EncsSQ",  // 花かるた（東京よさこい）
  "https://www.youtube.com/embed/KZpmyL2k_-8",  // 藤結び（東京よさこい）
  "https://www.youtube.com/embed/VrGo3bUpPv8",  // かさね（東京よさこい）
  "https://www.youtube.com/embed/MUd6pCOWD7g",  // 胡蝶の夢（東京よさこい）
][Math.floor(Math.random() * 16)];
