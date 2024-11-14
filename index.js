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
let pomodoro = document.querySelector("study-timer")
let shortP = document.getElementById("short-timer")
let longP = document.getElementById("long-timer")


function showPomodoroTimer() {
    pomodoro.style.display = "block";
    shortP.style.display = "none";
    longP.style.display = "none";
}
showPomodoroTimer()

let currentTimer = null;

pomodoro.addEventListener("click", showPomodoroTimer());


// function showShortTimer() {
//     pomodoro.style.display = "none";
//     shortP.style.display = "block";
//     longP.style.display = "none"
// }
// showShortTimer()
// pomodoro.addEventListener("click", showShortTimer());



// function showLongTimer() {
//     pomodoro.style.display = "none";
//     shortP.style.display = "none";
//     longP.style.display = "block";
// }
// showLongTimer()
// pomodoro.addEventListener("click", showLongTimer());
