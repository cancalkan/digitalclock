function clock(){
var fullDate = new Date();
var hours = fullDate.getHours();
var minutes=fullDate.getMinutes();
var seconds = fullDate.getSeconds();
var hoursspan= document.getElementById('hours');
var minutesspan=document.getElementById('minutes');
var secondspan=document.getElementById('seconds');
hoursspan.innerHTML=hours;
minutesspan.innerHTML = ":"+minutes;
secondspan.innerHTML= ":"+seconds;
}
if (hours < 10) {
    hours= "0" + hours;
}
if (minutes < 10) {
    minutes= "0" + minutes;
}
if (seconds < 10) {
    seconds= "0" + seconds;
}


setInterval(clock,100);