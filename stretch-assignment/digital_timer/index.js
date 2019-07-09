// TIMER that simply relays the actual time of day

// function startTime() {
//     let today = new Date();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     let ms = today.getMilliseconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     ms = checkTime(ms);
//     document.getElementById('secondTens').innerHTML = m;
//     document.getElementById('secondOnes').innerHTML = s;
//     document.getElementById('msHundreds').innerHTML = ms;
//     var t = setTimeout(startTime, 10);
//     // document.getElementById('msTens').innerHTML = ms;
// }

// function checkTime(i) {
//     if (i < 10) {i = '0' + i};
//     return i;
// }

// window.addEventListener("load", (event) => {
//     startTime();
// });


// STRETCH GOAL TIMER
// set a variable equal to the HTML element for seconds which will increment up +1 whenever clicked

// SECONDS
let s = document.querySelector('#secondOnes');
// button = document.querySelector('.button'); 
// USE IF CLICK BUTTON IS UNCOMMENTED BELOW

s.textContent = 0;
let timer = window.setInterval(function() {
    let incrementer = 1;
    s.textContent = (Number(s.textContent) + Number(incrementer)) % 10;
}, 1000);

// button.addEventListener('click', () => {
//     window.clearInterval(timer)
// })

// MILLISECONDS
const msHundreds = document.querySelector('#msHundreds');

msHundreds.textContent = 0;
window.setInterval(function() {
    let incrementer = Number(1);
    msHundreds.textContent = (Number(msHundreds.textContent) + Number(incrementer)) % 100;
}, 10);


// THIS ALLOWS THE CLICK BUTTON TO TRIGGER THE INCREMENTER
// s.textContent = 0;
// button.addEventListener('click', () => {
//     let incrementer = 1;
//     s.textContent = Number(s.textContent) + Number(incrementer);
//     s.textContent = s.textContent;
//     console.log('s', s)
// })



// const tens = document.getElementById('secondTens');


// const msTens = document.getElementById('msTens');