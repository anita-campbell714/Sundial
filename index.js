let hours = 0;
let minutes = 0;
let seconds = 0;

// S: Stopwatch
let stopwatch = document.querySelector(".stopwatch");

let startS = document.getElementById("start-stopwatch");
let stopS = document.getElementById("stop-stopwatch");
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

stopS.addEventListener("click", () => {
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
let currentTimer = null;

let pomodoro = document.getElementById("study-timer")
let shortP = document.getElementById("short-timer")
let longP = document.getElementById("long-timer")

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

document.getElementById("studyBtn").addEventListener("click", function() {
    hideAllTimers();
    pomodoro.style.display = "block"
    currentTimer = pomodoro
})

document.getElementById("shortBtn").addEventListener("click", function() {
    hideAllTimers();
    shortP.style.display = "block"
    currentTimer = shortP
})

document.getElementById("longBtn").addEventListener("click", function() {
    hideAllTimers();
    longP.style.display = "block"
    currentTimer = longP
})

let myInterval = null;

function startTimer(timerDisplay) {
    if(myInterval) {
        clearInterval(myInterval);
    }
    timerDuration = timerDisplay.getAttribute("dataDuration").split(":")[0]
    console.log(timerDuration)
}


console.log(typeof(pomodoro.innerHTML))