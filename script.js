let stopwatchInterval;  // Declare these variables outside of both functions
let elapsedPausedTime = 0;
let startTime = document.getElementById("stopwatch"); // Correct the getElementById parameter

function startStopwatch() {
    if (!stopwatchInterval) {
      startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
      stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
    }
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
  }
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedPausedTime = 0;
    document.getElementById("stopwatch").innerHTML = "00:00:00";
}

function updateStopwatch() {
    var currentTime = new Date().getTime(); // get current time in milliseconds
    var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
    var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
    var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
    document.getElementById("stopwatch").innerHTML = displayTime; // update the display
  }
  
  function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
  }