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

function isArrayIncremental(preArray) {
    var trigger = true;
    var array = preArray.split(" ");
    
    if(array.length != 5){
       alert("You didn't enter 5 numbers!");
    } else{
        for(i=0; i < (array.length - 1); i++){
            if(trigger === true){
                if((array[i+1]-array[i]) != 1){
                trigger = false;
                }
            }
        }
    alert("Is the array consecutive? " + trigger);
    }
}

function isArrayMultiple(preArray) {
    var trigger = false;
    var array = preArray.split(" ");
    

    for(i=0; i < (array.length - 1); i++){
        if(trigger === false){
            if((array[i+1]-array[i]) != 1){
            trigger = true;
            }
        }
    }
    alert("Does these numbers contain multiples of the same value? " + trigger);
}

function first(array,n){
    
    var newArray = [];
    
    if(n == undefined){
       n=1;
    } else if(n > array.length){
        n=array.length;
    }
    
    for(i=0; i < n; i++){
        newArray[i] = array[i]
    }
    return newArray;
}


