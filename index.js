/* Show #nav bar only after #unofficial banner leaves the viewport */
new IntersectionObserver((entries, _) => {
  const nav = document.getElementById("nav");

  if (entries[0].isIntersecting) {
    nav.classList.remove("on");
  } else {
    nav.classList.add("on");
  }
}, {}).observe(document.getElementById("unofficial"));

/* Show #i18n banner if user does not understand Japanese at all */
if (!navigator.languages.includes("ja")) {
  document.getElementById("i18n").style.display = "block";
}

/* Let users to choose video for #mustsee */
const mustseeSelect = document.getElementById("mustsee-select");

mustseeSelect.addEventListener("change", _ => {
  document.getElementById("mustsee-iframe").src = mustseeSelect.value;
});

/* Recommend video randomly */
mustseeSelect.selectedIndex = Math.floor(Math.random() * mustseeSelect.length);
mustseeSelect.dispatchEvent(new Event("change"));

/* Let users to go to next or previous quiz */
// I don't like % operator because it returns negative value if n < 0. In fact,
// % returns remainder rather than modulo.
const mod = (n, m) => ((n % m) + m) % m;

document.querySelectorAll("#quiz article").forEach((quiz, i, quizzes) => {
  const prev = document.createElement("button");
  prev.type = "button";
  prev.classList.add("prev");
  prev.addEventListener("click", _ => {
    quiz.classList.remove("on");
    quizzes.item(mod(i - 1, quizzes.length)).classList.add("on");
  });

  const next = document.createElement("button");
  next.type = "button";
  next.classList.add("next");
  next.addEventListener("click", _ => {
    quiz.classList.remove("on");
    quizzes.item(mod(i + 1, quizzes.length)).classList.add("on");
  });

  const h3 = quiz.querySelector("h3");
  h3.appendChild(prev);
  h3.appendChild(next);
});
