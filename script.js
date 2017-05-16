//Question 1
function currentDate() {
    var today = new Date();
    var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
    alert("The date is: " + today.toLocaleDateString());
}

//Question 2
function isLeapYear(date) {
    if(date % 400 === 0){
        alert(date + " is a leap year.");
       } else if(date % 4 === 0 && date % 100 != 0){
           alert(date + " is a leap year.");
       } else{
           alert(date + " is not a leap year.");
       }
}

//Question 3
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

//Question 4
function isArrayMultiple(preArray) {
    var trigger = false;
    var array = preArray.split(" ");
    
    for(i=0; i < (array.length - 1); i++){
        if(trigger === false){
            for(j=i; j < (array.length-1); j++){
                if(array[i] - array[j+1] === 0){
                    trigger = true;
                }
            }
        }
    }
    alert("Does these numbers contain multiples of the same value? " + trigger);
}

//Question 5
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

//Question 6
function arrayToString() {
    var myColor = ["Red", "Green", "White", "Black"];
    var firstString = "";

    myColor.forEach(function(element){firstString = firstString + ", " + element});
    var myString = firstString.slice(2);

    alert(myString);
    console.log(myString);
}

//Question 7
function mostFrequent(inputArray) {
    inputArray.forEach(function(element){
        
        
    });
    // inputArray.sort Thinking of sorting the array first and checking incremental elements. Somehow maybe assign new variable names to each unique element and come up with a variable counter assigned to each element. Display the largest counter and variable.
}
















