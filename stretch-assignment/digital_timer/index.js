
// STRETCH GOAL TIMER
// set a variable equal to the HTML element for seconds which will increment up +1 whenever clicked

const t = document.querySelector('#secondTens');
const s = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

// SECOND TENS
t.textContent = 0;
function timer1() {
    t1 = window.setInterval(function() {
        let incrementer = 1;
        t.textContent = (Number(t.textContent) + Number(incrementer)) % 10;
    }, 10000)
}

// SECOND ONES
s.textContent = 0;
function timer2() {
    t2 = window.setInterval(function() {
        let incrementer = 1;
        s.textContent = (Number(s.textContent) + Number(incrementer)) % 10;
    }, 1000)
}

// MILLISECONDS - HUNDREDS
msHundreds.textContent = 0;
function timer3() {
    t3 = window.setInterval(function() {
        let incrementer = Number(1);
        msHundreds.textContent = (Number(msHundreds.textContent) + Number(incrementer)) % 10;
    }, 100);
}

// MILLISECONDS - TENS
msTens.textContent = 0;
function timer4() {
    t4 = window.setInterval(function() {
        let incrementer = Number(1);
        msTens.textContent = (Number(msTens.textContent) + Number(incrementer)) % 10;
    }, 10)
}

const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => {
    timer1();
    timer2();
    timer3();
    timer4();
})

function clearAll() {
    window.clearInterval(t1);
    window.clearInterval(t2);
    window.clearInterval(t3);
    window.clearInterval(t4);
}

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => {
    clearAll();
})

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    clearAll();
    t.textContent = 0;
    s.textContent = 0;
    msTens.textContent = 0;
    msHundreds.textContent = 0;
})