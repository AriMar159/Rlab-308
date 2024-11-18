// Loop through all numbers from 1 to 100.
function countto100(){
    for (let i = 1; i <= 100; i++){
        console.log(i)
    } 
}

countto100();
// If a number is divisible by 3, log “Fizz.”\
function divisibleby3(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0)
    } 
console.log("Fizz");
} else {
    console.log(i)
   }

// If a number is divisible by 5, log “Buzz.”
for (let i = 1; i <= 100; i++)  {
    if(i % 5 ===0) {
        console.log("Buzz");
        
    } else {
        console.log(i);
    }
}
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");

    }else{
        console.log(i);
    }
}
// If a number is not divisible by either 3 or 5, log the number.
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    }
}