/* Show #nav bar only after #notice banner leaves the viewport */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("notice"));

/* Replay animation when #hero image is clicked */
document.getElementById("hero").addEventListener("click", function (_) {
  this.getAnimations({ subtree: true }).forEach(animation => animation.play());
});

/* Choose a video for #random */
document.getElementById("random").src = [
  "https://www.youtube.com/embed/RwByT1_VnTo",  // Amatsukasa (debut)
  "https://www.youtube.com/embed/PctZc6cfDzU",  // Amatsukasa (sample)
  "https://www.youtube.com/embed/uwIHyLPBZkY",  // Harebiyori (debut)
  "https://www.youtube.com/embed/bVmuQT03h98",  // Urara (debut)
  "https://www.youtube.com/embed/161C9dMftYY",  // Urara (MV)
  "https://www.youtube.com/embed/_rfaaXVZsDI",  // Chitose (debut)
  "https://www.youtube.com/embed/x61mAbUGrAs",  // Chitose (sample)
  "https://www.youtube.com/embed/quxty9_wvWo",  // Kamihakari (debut)
  "https://www.youtube.com/embed/FZO-hpCalVA",  // Asobase (final)
  "https://www.youtube.com/embed/1kQywIIlc64",  // Haikara (debut)
  "https://www.youtube.com/embed/y5zAVQ9xUmI",  // Maitourou (final)
  "https://www.youtube.com/embed/OVwaCNvhlqI",  // Maitourou (sample)
  "https://www.youtube.com/embed/yJ-M7EncsSQ",  // Hanakaruta (final)
  "https://www.youtube.com/embed/KZpmyL2k_-8",  // Fujimusubi (final)
  "https://www.youtube.com/embed/VrGo3bUpPv8",  // Kasane (final)
  "https://www.youtube.com/embed/MUd6pCOWD7g",  // Kochonoyume (final)
][Math.floor(Math.random() * 16)];
