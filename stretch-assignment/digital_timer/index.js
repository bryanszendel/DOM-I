// const tens = document.getElementById('secondTens');

// console.log(plusOne())
// let ones = document.querySelector('#secondOnes');

// let myVar = setInterval(myTimer, 1000);
// function myTimer() {
//     numbers1 = document.getElementById('secondOnes').innerHTML;
//     document.getElementById('secondOnes').innerHTML = numbers + Number(1);
// }

function startTime() {
    let today = new Date();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ms = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    document.getElementById('secondTens').innerHTML = m;
    document.getElementById('secondOnes').innerHTML = s;
    document.getElementById('msHundreds').innerHTML = ms;
    var t = setTimeout(startTime, 10);
    // document.getElementById('msTens').innerHTML = ms;
}

function checkTime(i) {
    if (i < 10) {i = '0' + i};
    return i;
}

window.addEventListener("load", (event) => {
    startTime();
});


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
