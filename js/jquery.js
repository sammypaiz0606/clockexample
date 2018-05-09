//function for the the time..
function time() {
//few variables for the time..
    var today   = new Date();
    var hours   = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
//if statement if the hours is greater than 12, substract 12 from hours
    if(hours > 12) {
        hours = hours - 12;
    };
    
    function checkTime(i) {
      if(i < 0) {
          i = '0' + i;
      };
        return i;
    };
    setTimeout(time, 1000);
//get elem with id time
    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
};
//call the function
time();