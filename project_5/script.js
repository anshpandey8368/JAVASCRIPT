let timeElem = document.querySelector('.time');
let setAlarmBtn = document.querySelector('.submit');
let set_alarm = document.querySelector('.set-alarm');
let selectMenu = document.querySelectorAll("select");

let alarmTime;
let ringtone = document.getElementById('alarmSound');

function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let secs = currentTime.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
        if (hours > 12) hours -= 12;
        ampm = "PM";
    }

    if (hours === 0) hours = 12;

    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMins = mins.toString().padStart(2, '0');
    let formattedSecs = secs.toString().padStart(2, '0');

    timeElem.textContent = `${formattedHours}:${formattedMins}:${formattedSecs} ${ampm}`;
    
    if (alarmTime && alarmTime === `${formattedHours}:${formattedMins}:00 ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
}

setInterval(displayTime, 1000);

for (let i = 12; i > 0; i--) {
    let formattedValue = i < 10 ? "0" + i : i;
    let option = `<option value="${formattedValue}">${formattedValue}</option>`;
    selectMenu[0].insertAdjacentHTML("beforeend", option);
}

for (let i = 59; i >= 0; i--) {
    let formattedValue = i < 10 ? "0" + i : i;
    let option = `<option value="${formattedValue}">${formattedValue}</option>`;
    selectMenu[1].insertAdjacentHTML("beforeend", option);
}

setAlarmBtn.addEventListener("click", function() {
    if (setAlarmBtn.innerText === "Set Alarm") {
        let time = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;

        if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
            return alert("Please, select a valid time to set Alarm!");
        }

        alarmTime = time;
        set_alarm.classList.add("disable");
        setAlarmBtn.innerText = "Clear Alarm";
    } else {
        alarmTime = null;
        ringtone.pause();
        ringtone.currentTime = 0;
        set_alarm.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
    }
});
