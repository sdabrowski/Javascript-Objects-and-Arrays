function currentDate() {
    var today = new Date();
    var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
    alert("The date is: " + date);
}


function isLeapYear(date) {
    if(date % 400 === 0){
        alert(date + " is a leap year.");
       } else if(date % 4 === 0 && date % 100 != 0){
           alert(date + " is a leap year.");
       } else{
           alert(date + " is not a leap year.");
       }
}
