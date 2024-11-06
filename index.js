let seconds = 0;
let minutes = 0;
let hours = 0;

let startS = document.getElementById("start-stopwatch");
let pauseS = document.getElementById("pause-stopwatch");
let resetS = document.getElementById("reset-stopwatch");

let stopStatus = 0;

let stopwatch = document.querySelector(".stopwatch");

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