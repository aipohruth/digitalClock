function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
  // var mSec = dateTime.getMilliseconds();
  var session = document.getElementById('session');
  var day = dateTime.getDay();

   if(hrs >= 12){
    session.innerHTML = 'PM';
   }
   else{
     session.innerHTML = 'AM';
   }

switch (day){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    default:
        day = 'Saturday';
}

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
   // document.getElementById('mSec').innerHTML = mSec;
    document.getElementById('day').innerHTML = `Today is ${day}`;

    

}
setInterval(displayTime, 10);
