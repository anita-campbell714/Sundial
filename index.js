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
let timerMessage = document.getElementById("timer-message")

function showDefaultMessage() {
    pomodoro.style.display = "none";
    shortP.style.display = "none";
    longP.style.display = "none";
    timerMessage.style.display = "block"
}
showDefaultMessage();


function hideAllTimers() {
    let timers = document.querySelectorAll(".show-timer")
    timers.forEach((timer) => {
        timer.style.display = "none"
    })
}

let myInterval = null;
let selectedTimer;

document.getElementById("studyBtn").addEventListener("click", function() {
    console.log("Study Timer has been selected")
    hideAllTimers();
    pomodoro.style.display = "block"
    currentTimer = pomodoro
})

document.getElementById("shortBtn").addEventListener("click", function() {
    console.log("Short Break has been selected")
    hideAllTimers();
    shortP.style.display = "block"
    currentTimer = shortP
})

document.getElementById("longBtn").addEventListener("click", function() {
    console.log("Long Break has been selected")
    hideAllTimers();
    longP.style.display = "block"
    currentTimer = longP
})

function startTimer(timerDisplay) {
    if(myInterval) {
        clearInterval(myInterval);
    }

    timerDuration = timerDisplay.getAttribute("data-duration").split(":")[0]

    let durationInMiliseconds = timerDuration * 60 * 1000
    let endTimestamp = Date.now() + durationInMiliseconds

    myInterval = setInterval(function() {
        const timeRemaining = new Date(endTimestamp - Date.now());
        
        if (timeRemaining <= 0) {
            clearInterval(myInterval);
            timerdisplay.textContent = "00m : 00s";

            const alarm = new Audio("https://freespecialeffects.co.uk/soundfx/music/drum_01.wav");
            alarm.play();
        } else {
            const minutes = Math.floor(timeRemaining / 60000);

            const seconds = ((timeRemaining % 60000) / 1000).toFixed(0);
            const formattedTime = `${minutes}m : ${seconds.toString().padStart(2, '0')}s`;

            timerDisplay.textContent = formattedTime;
        }
    }, 1000)
}

document.getElementById("start-timerBtn").addEventListener("click", function () {
    if (currentTimer) {
        startTimer(currentTimer);
        document.getElementById("timer-message").style.display = "none";
    } else {
        document.getElementById("timer-message").style.display = "block";
    }
});

document.getElementById("stop-timerBtn").addEventListener("click", function () {
if (currentTimer) {
    clearInterval(myInterval);
}
});

document.getElementById("reset-timer").addEventListener("click", function () {
    clearInterval(myInterval)
    let originalTimer = currentTimer.getAttribute("data-duration")

    if(originalTimer === "25.00") {
        currentTimer.innerHTML = "25m : 00s"
    }
    else if(originalTimer === "5.00") {
        currentTimer.innerHTML = "5m : 00s"
    }
    else if(originalTimer === "10.00") {
        currentTimer.innerHTML = "10m : 00s"
    }
})