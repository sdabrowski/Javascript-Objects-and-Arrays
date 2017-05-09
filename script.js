function comparison(a,b) {
    if (a>b){
        alert(a + " is a greater number.");
    } else {
        alert(b + " is a greater number.");
    } 
}

function sortFunction() {
    var sortArray = [];
    sortArray[0] = prompt("Enter a number.");
    sortArray[1] = prompt("Enter another number.");
    sortArray[2] = prompt("Enter another number.");
   
    alert(sortArray.sort(function(a, b){return a - b}));   
}

function maxValueFunction() {
    var maxArray = [];
    
    for(i=0; i<5; i++) {
        maxArray[i] = prompt("Enter a number.");
    }
    
    var largest = maxArray[0];
    
    for(i=1; i<5; i++){
        if (largest < maxArray[i]) {
            largest = maxArray[i];
        }
    }
    
    alert("The largest value is: " + largest);  
}

function oddOrEven() {
    for(i=0; i<15; i++) {
        if((i+1) % 2 === 0){
           alert((i+1) + " is even");
        } else{
            alert((i+1) + " is odd");
        }
    }
}

function fizzBuzz() {
    var array = [];

    for(i=1; i<101; i++) {
        var arrayIndex = i-1;
        if(i % 15 === 0){
           array[arrayIndex] = "FizzBuzz";
        } else if (i % 3 === 0) {
            array[arrayIndex] = "Fizz";
        } else if (i % 5 === 0) {
            array[arrayIndex] = "Buzz";
        } else {
            array[arrayIndex] = i;
        }
    }
    alert(array);
}

function divisiblyBy3() {
    var counter = 0;

    for(i=1; i<1001; i++) {
        if(i % 3 === 0) {
           counter++;
        }
    }
    alert("There are this many numbers betwen 1 and 1000 that are divisible by 3: " + counter)
}

function numberPyramid() {
    var row = "1";
    var j = 1;
    for(i=1; i<6; i++){
        for(j=1; j<=i; j++){
            if(j === 1){
                row = "    1";
            } else{
                row = row.concat(j);
                row = row.slice(1);
            }
        }
        j--;
        while((j)>0){
            j--;
            if(j>0){
                row = row.concat(j);
            }
        }
        console.log(row);
    }
}

function numberPyramid2(){
    var row = "";
    var j = 1;
    var i = 1;
    
    for(i=1; i<6; i++){
        for(j=1; j<=i; j++){
            if(j === 1){
                row = "    1";
            } else{
                row = row.concat(j);
                row = row.slice(1);
            }
        }
        j--;
        while(j>0){
            j--;
            if(j>0){
                row = row.concat(j);
            }
        }
        console.log(row);
    }
    i--;
    while(i>1){
        i--;
        for(j=1; j<=i; j++){
            if(j === 1){
                row = "    1";
            } else{
                row = row.concat(j);
                row = row.slice(1);
            }
        }
        j--;
        while(j>0){
            j--;
            if(j>0){
                row = row.concat(j);
            }
        }
        console.log(row);
    }
}
