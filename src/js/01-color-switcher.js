const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(evt) {

  intervalId = setInterval(bodyColorChange, 1000);

  startBtn.setAttribute('disabled', '');
  isStopBtnActive = stopBtn.hasAttribute('disabled');

  if (isStopBtnActive) {
    stopBtn.removeAttribute('disabled', '');
  }
  
}

function bodyColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopBtnClick(evt) {
  clearInterval(intervalId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
  
}
