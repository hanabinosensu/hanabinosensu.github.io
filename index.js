/*
 * Make #nav bar opaque when it hits the top border of the viewport, or
 * in other words, when #notice banner leaves the viewport.
 */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
}, {}).observe(document.getElementById("notice"));

/* Show #goto-stickers button when #events section enters viewport */
new IntersectionObserver((entries, _) => {
  if (entries[0].isIntersecting) {
    document.getElementById("goto-stickers").classList.add("shown");
  }
}, {}).observe(document.getElementById("events"));

/*
 * Hide #goto-stickers button when upper 200px of the #stickers section
 * becomes visible.
 */
new IntersectionObserver((entries, _) => {
  if (entries[0].isIntersecting) {
    document.getElementById("goto-stickers").classList.remove("shown");
  }
}, { rootMargin: "0px 0px -200px 0px" }).observe(document.getElementById("stickers"));

/* Collapsible #discography */
document.getElementById("expand").addEventListener("click", _ => {
  document.getElementById("discography").classList.remove("collapsed");
});

document.getElementById("discography").classList.add("collapsed");

/* YouTube facade */
document.querySelectorAll(".yt-facade").forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();

    /* Fetch YouTube Player API script only once */
    new Promise((resolve, reject) => {
      if (window.YT) {
        resolve();
      }

      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onload = () => window.YT.ready(resolve);
      script.onerror = reject;

      element.append(script);

    /* Now we are going to populate facade with actual player */
    }).then(() => {
      const iframe = document.createElement("iframe");
      iframe.classList.add("yt-player");
      iframe.allow = "fullscreen; picture-in-picture; web-share";
      iframe.src = "https://www.youtube.com/embed/" + element.dataset.videoId + "?enablejsapi=1";
      iframe.style.aspectRatio = element.style.aspectRatio;

      element.after(iframe);
      element.remove();

      new window.YT.Player(iframe, {
        events: {
          onReady: event => event.target.playVideo()
        }
      });
    });
  });
});
