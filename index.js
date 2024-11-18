let seconds = 0;
let minutes = 0;
let hours = 0;

// S: Stopwatch
let stopwatch = document.querySelector(".stopwatch");

let startS = document.getElementById("start-stopwatch");
let pauseS = document.getElementById("pause-stopwatch");
let resetS = document.getElementById("reset-stopwatch");

let stopStatus = 0;


startS.addEventListener("click", () => {
    if(stopStatus!==0){
        clearInterval(stopStatus)
    }
    stopStatus = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0
            minutes++
            if (minutes === 60) {
                minutes = 0
                hours++
            }
        }
    let h = hours < 10 ? ("0" + hours): hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ?("0" + seconds) : seconds;
    stopwatch.innerHTML = `${h}h : ${m}m : ${s}s`
    }, 1000)
})

pauseS.addEventListener("click", () => {
    clearInterval(stopStatus)
})

resetS.addEventListener("click", () => {
    clearInterval(stopStatus)
    seconds = 0
    minutes = 0
    hours = 0
    stopwatch.innerHTML = "00h : 00m : 00s"
})


// P: Pomodoro
let pomodoro = document.getElementById("study-timer")
let shortP = document.getElementById("short-timer")
let longP = document.getElementById("long-timer")

let currentTimer = null;

function showDefaultTimer() {
    pomodoro.style.display = "block";
    shortP.style.display = "none";
    longP.style.display = "none";
}
showDefaultTimer();

function hideAllTimers() {
    let timers = document.querySelectorAll(".show-timer")
    timers.forEach((timer) => {
        timer.style.display = "none"
    })
}

function clickPomodoro() {
    hideAllTimers();
    pomodoro.style.display = "block"
    currentTimer = pomodoro
}

function clickShort() {
    hideAllTimers();
    shortP.style.display = "block"
    currentTimer = shortP
}

function clickLong() {
    hideAllTimers();
    longP.style.display = "block"
    currentTimer = longP
}

const pomBtnElement = document.getElementById("pomBtn")

const shortBtnElement = document.getElementById("shortBtn")

const longBtnElement = document.getElementById("longBtn")

if(pomBtnElement) {
    pomBtnElement.addEventListener("click", clickPomodoro());
}

if(shortBtnElement) {
    shortBtnElement.addEventListener("click", clickShort());
}

if(longBtnElement) {
    longBtnElement.addEventListener("click", clickLong())
}
