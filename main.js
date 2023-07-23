const targetButton = document.querySelector(".primary-btn.roll-btn");
const interval = 4000; //时间间隔单位毫秒

let isWindowFocus = true;
let timer = null;
window.addEventListener("focus", onWindowFocus);
window.addEventListener("blur", onWindowBlur);

function onWindowFocus() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  timer = setInterval(() => {
    targetButton.click();
  }, interval);
}

function onWindowBlur() {
  if (timer) {
    clearInterval(timer);
  }
}
