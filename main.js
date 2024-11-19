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
        if (i % 3 === 0) {

console.log("Fizz");
} else {
    console.log(i);
   }
  }
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

let n = 10

function isPrime(num) {
    if(num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let nextPrime = n + 1;
while (true) {
    if (isPrime(nextPrime)) {
        console.log('The next prime number after ${n} is ${nextPrime}');
        break;
    }
   nextPrime++;
}

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let cell = "";
let row = [];
let csvArray = [];  
let numColumns = 0; 

for (let i = 0; i <csvString.length; i++) {
  const char = csvString[i];

  if (char === ",") {
    row.push(cell);
    cell = "";
  } else if (char === "\n") {
    row.push(cell);
    
    if (numColumns === 0) {
      numColumns = row.length; 
    }
    csvArray.push(row);

    cell = "";
    row = [];
  } else { cell += char;
  }
}

if (cell) {
  row.push(cell);
  csvArray.push(row);
}

const headers = csvArray[0].map(header => header.toLocaleLowerCase());
const resultArray = [];

for (let i = 1; i < csvArray.length; i++) {
    let rowObject = {};
    for (let j = 0; j < csvArray[i].length; j++) {
        rowObject[headers[j]] = csvArray[i][j];
    }
    resultArray.push(rowObject);
}

console.log(resultArray);
