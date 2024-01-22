const val = document.querySelector(".container .timer .display");

let restart = document.getElementById("restart");
let setval = null;
let second = 0;
function pushData() {
  second++;
  let hh = Math.floor(second / 3600);
  let mm = Math.floor(second / 60);

  let ss = second % 60;
  if (ss < 10) {
    ss = "0" + ss;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  val.innerHTML = `${hh}:${mm}:${ss}`;
}
function setTimer() {
  if (setval == null) {
    setval = setInterval(pushData, 1000);
  }
}
function stopTimer() {
  const display = document.querySelector(".display");

  clearInterval(setval);
  setval = null;
}
function resetData() {
  stopTimer();

  val.innerHTML = "00:00:00";
}
