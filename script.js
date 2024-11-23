const $ = (selector) => {
  return document.querySelector(selector);
};

const hour = $(".hour");
const dots = document.querySelectorAll(".dot");
const min = $(".min");
const sec = $(".sec");
const week = $(".week");
let showDot = true;

function update() {
  const now = new Date();

  showDot = !showDot;
  dots.forEach((dot) => {
    if (showDot) {
      dot.classList.add("invisible");
    } else {
      dot.classList.remove("invisible");
    }
  });

  hour.textContent = String(now.getHours()).padStart(2, "0");
  min.textContent = String(now.getMinutes()).padStart(2, "0");
  sec.textContent = String(now.getSeconds()).padStart(2, "0");

  Array.from(week.children).forEach((ele) => {
    ele.classList.remove("active");
  });

  week.children[now.getDay()].classList.add("active");
}

setInterval(update, 1000);

update();
