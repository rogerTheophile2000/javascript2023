const timeDisplay = document.querySelector("#time-display");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let pause = true;
let intervalid;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (pause) {
    pause = false;
    startTime = Date.now() - elapsedTime;
    intervalid = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!pause) {
    pause = true;
    elapsedTime = Date.now() - startTime;

    clearInterval(intervalid);
  }
});
resetBtn.addEventListener("click", () => {
  if (pause) {
    clearInterval(intervalid);
    let startTime = 0;
    let elapsedTime = 0;
    let currentTime = 0;
    let hours = 0;
    let mins = 0;
    let secs = 0;
    timeDisplay.textContent = "00:00:00";
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hours = pad(hours);

  timeDisplay.textContent = `${hours}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
