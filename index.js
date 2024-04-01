function addTimer() {
  // 获取刷新按钮
  let targetButton = document.querySelector(".primary-btn.roll-btn");
  if (!targetButton) {
    return;
  }
  // 时间间隔单位毫秒
  let interval = 6000;
  let timer = null;

  function tick() {
    clearTimer();

    // 使用setTimeout而不是setInterval保证每次都能获取到最新的interval值
    timer = setTimeout(() => {
      targetButton.click();
      tick();
    }, interval);
  }

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  // register timer
  window.addEventListener("focus", () => {
    tick();
  });
  window.addEventListener("blur", () => {
    clearTimer();
  });

  // add interval input to body
  const intervalInput = document.createElement("input");
  intervalInput.style = `display: block;
                          position: fixed;
                          font-size: 1.6rem;
                          right: 10rem;
                          width: 3.2rem;
                          top: 6rem;`;
  intervalInput.value = interval / 1000;
  intervalInput.placeholder = "秒";
  intervalInput.type = "number";
  intervalInput.oninput = (e) => {
    e.target.value.length > 2
      ? (e.target.value = e.target.value.slice(0, 2))
      : null;
  };
  intervalInput.onkeydown = (e) => {
    ["-", ".", "+"].includes(e.key) ? e.preventDefault() : null;
  };
  intervalInput.onchange = (e) => {
    let newValue = parseInt(e.target.value);
    isNaN(newValue) ? (interval = 6000) : (interval = newValue * 1000);
    e.target.value = interval / 1000 + "";
    tick();
  };
  document.body.appendChild(intervalInput);
}
