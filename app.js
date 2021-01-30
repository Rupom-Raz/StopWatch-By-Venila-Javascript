// Select element from html
let stopWatchCounterStart = document.getElementById("start");
let stopWatchCounterReset = document.getElementById("reset");
let stopWatchCounterPause = document.getElementById("pause");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

//Necessary functions

let min;
let sec = 0;
let timer = null;
let watchIsRunning = false;

let start = () => {
  if (!watchIsRunning) {
    watchIsRunning = true;
    timer = setInterval(() => {
      sec++;
      let { min, second } = getTime(sec);
      minutes.textContent = min < 10 ? ("0" + min) : min;
      seconds.textContent = second < 10 ? ("0" + second) : second;
    }, 1000);
  }
};

let reset = () => {
  watchIsRunning = false;
  clearInterval(timer);
  min = 0;
  sec = 0;
  minutes.textContent = "00";
  seconds.textContent = "00";
};

let pause = () => {
  watchIsRunning = false;
  clearInterval(timer);
};

let getTime = (sec) => {
 let  min = parseInt(sec / 60);
let second = parseInt(sec % 60);
  return {
    min,
    second,
  };
};

// Add eventlistener to buttons

stopWatchCounterStart.addEventListener("click", start);
stopWatchCounterReset.addEventListener("click", reset);
stopWatchCounterPause.addEventListener("click", pause);
