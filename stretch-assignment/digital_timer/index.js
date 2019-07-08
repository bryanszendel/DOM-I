// const tens = document.getElementById('secondTens');

// console.log(plusOne())
let ones = document.querySelector('#secondOnes');

let myVar = setInterval(myTimer, 1000);
let numbers;
function myTimer() {
    numbers = document.getElementById('secondOnes').innerHTML = Number(0);
    document.getElementById('secondOnes').innerHTML = numbers + Number(1);
}
myVar;
// let thatNumber = 0;
// ones.innerHTML = thatNumber;

// console.log(thatNumber)
// plusOne = () => {
//     thatNumber += 1;
//     return thatNumber;
//     console.log(thatNumber);
// }

// let onesIncrementer = window.setInterval(() => {
//     window.plusOne();
// }, 1000);
// onesIncrementer;

// const msHundreds = document.getElementById('msHundreds');


// const msTens = document.getElementById('msTens');

// tens() = 
