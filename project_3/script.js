function DisplayTime(){
    let time = document.querySelector('#time');

    let currentTime = new Date();

    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');

    let timeFormat = `${hours}:${minutes}:${seconds}`;
    time.textContent = timeFormat;
}
setInterval(DisplayTime, 1000);

DisplayTime();

function DisplayDate(){
    let dates = document.querySelector('#date');

    let currentDate = new Date;

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = days[currentDate.getDay()];

    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let year = currentDate.getFullYear();

    let dateFormat = `${currentDay}, ${month}, ${year}`;
    dates.textContent = dateFormat;
}
setInterval(DisplayDate , 1000);

DisplayDate();