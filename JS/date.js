const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
const m = new Date();
let mon = month[m.getMonth()];
let day = weekday[m.getDay()];
let dayofmon = m.getDate();
let fullyear = m.getFullYear();
let hour = m.getHours();
let min = m.getMinutes();

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
document.getElementById("TodayDate").innerHTML = day+", "+ dayofmon +" "+ mon + "  "+ fullyear;

document.getElementById("TodayTime").innerHTML = formatAMPM(new Date);