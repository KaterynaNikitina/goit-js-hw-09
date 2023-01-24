import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      startBtn.setAttribute('disabled', '');
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      options.defaultDate = selectedDates[0];
      startBtn.removeAttribute('disabled', '');
    }
  },
};

flatpickr('#datetime-picker', options);

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('input');

const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

let selectedDate = null;
let currentDate = null;


startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  const timerId = setInterval(timer, 1000);
  startBtn.setAttribute('disabled', '');
}
function timer() {
  selectedDate = new Date(inputEl.value);
  currentDate = Date.now();
  const deltaTime = selectedDate - Date.now();
  const convertedData = convertMs(deltaTime);
  updateCount(convertedData);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateCount({ days, hours, minutes, seconds }) {
  daysCount.textContent = `${days}`;
  hoursCount.textContent = `${hours}`;
  minutesCount.textContent = `${minutes}`;
  secondsCount.textContent = `${seconds}`;
}
