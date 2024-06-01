var startTime, elapsedTime = 0, timerInterval;
var lapCounter = 1;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
    }, 10);
    toggleButtons(true);
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    toggleButtons(false);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
    toggleButtons(false);
    document.getElementById('lapList').innerHTML = '';
    lapCounter = 1;
}

function recordLap() {
    var lapTime = formatTime(elapsedTime);
    var lapItem = document.createElement('li');
    lapItem.innerText = 'Lap ' + lapCounter + ': ' + lapTime;
    document.getElementById('lapList').appendChild(lapItem);
    lapCounter++;
}

function displayTime(time) {
    var formattedTime = formatTime(time);
    document.querySelector('.display').innerText = formattedTime;
}

function formatTime(time) {
    var hours = Math.floor(time / 3600000);
    var minutes = Math.floor((time % 3600000) / 60000);
    var seconds = Math.floor((time % 60000) / 1000);
    var milliseconds = Math.floor(time % 1000);
    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    );
}

function toggleButtons(running) {
    document.getElementById('startBtn').disabled = running;
    document.getElementById('pauseBtn').disabled = !running;
    document.getElementById('resetBtn').disabled = running;
    document.getElementById('lapBtn').disabled = !running;
}
