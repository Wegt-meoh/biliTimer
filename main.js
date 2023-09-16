let targetButton = null;
const interval = 6000; //时间间隔单位毫秒
let timer = null;

window.addEventListener("load", () => {
  targetButton = document.querySelector(".primary-btn.roll-btn");
});
window.addEventListener("focus", onWindowFocus);
window.addEventListener("blur", onWindowBlur);

function onWindowFocus() {
  if (!targetButton) return;
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
