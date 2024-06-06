// script.js
let is24HourFormat = true;

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad single digit numbers with a leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (!is24HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        clockElement.textContent = `${hours}:${minutes}:${seconds} ${period}`;
    } else {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Toggle between 24-hour and 12-hour formats
function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock(); // Update the clock immediately to reflect the format change
}

// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
