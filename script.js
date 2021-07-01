let dt, min, hours, sec, time, year, day, month, date, weekday;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
setInterval(() => {
    dt = new Date();
    // Time Calculation
    min = dt.getMinutes();
    hours = dt.getHours();
    sec = dt.getSeconds();
    time = hours + " : " + min + " : " + sec;
    document.getElementById('time').innerHTML = time;
    // Date calculation
    day = dt.getDate();
    month = dt.getMonth();
    year = dt.getFullYear();
    weekday = dt.getDay();
    date = day + " / " + month + " / " + year + " (" + days[weekday] + ")";
    document.getElementById('date').innerHTML = date;
}, 1000);

