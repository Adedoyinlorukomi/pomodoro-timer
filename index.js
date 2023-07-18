const StartEl = document.getElementById('start');
const StopEl = document.getElementById('stop');
const ResetEl = document.getElementById('reset');
const TimerEl = document.getElementById('timer');


let interval;
let timeLeft = 1800;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
    TimerEl.innerHTML = formattedTime;
}


function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up");
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(interval);
    alert("Click Start to continue or Reset to Set a new timer!")
    }

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

StartEl.addEventListener("click" , startTimer)
StopEl.addEventListener('click' , stopTimer)
ResetEl.addEventListener('click' , resetTimer)