function countDown() {

    let today = new Date();
    let year = today.getFullYear();

    let nextYear = year + 1
    let NY = new Date(nextYear, 00, 01, 00, 00, 00);

    milisecondsLeft = NY - today;

    let daysLeft = Math.floor(milisecondsLeft / 86400000);
    milisecondsLeft = milisecondsLeft - (daysLeft * 86400000);
    document.getElementById('days').innerText = daysLeft;

    let hoursLeft = Math.floor(milisecondsLeft / 3600000);
    milisecondsLeft = milisecondsLeft - (hoursLeft * 3600000);
    document.getElementById('hours').innerText = formatTime(hoursLeft);

    let minutesLeft = Math.floor(milisecondsLeft / 60000);
    milisecondsLeft = milisecondsLeft - (minutesLeft * 60000);
    document.getElementById('mins').innerText = formatTime(minutesLeft);

    let secondsLeft = Math.floor(milisecondsLeft / 1000);
    document.getElementById('seconds').innerText = formatTime(secondsLeft);

}

function formatTime(time) {
    if (time < 10) {
        return time = '0' + time;
    } else {
        return time;
    }
}

countDown();
setInterval(countDown, 1000)