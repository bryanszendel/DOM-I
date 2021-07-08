
// STRETCH GOAL TIMER
// set a variable equal to the HTML element for seconds which will increment up +1 whenever clicked

const t = document.querySelector('#secondTens');
const s = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digitDiv = document.querySelectorAll('.digit')

function timer(node, time) {
    let count = 0;
    let digit = window.setInterval(function() {
        if (count === 9) {
            count = 0; 
        } else count++;
        node.textContent = count;

        if (t.textContent === '1') {
            window.clearInterval(digit)
            digitDiv.forEach((item) => item.classList.add('redDigit'))
        }
    }, time)

        const stopButton = document.querySelector('#stop');
        stopButton.addEventListener('click', () => {
        window.clearInterval(digit);
    })
}

const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => {
    timer(t, 10000);
    timer(s, 1000);
    timer(msHundreds, 100);
    timer(msTens, 10);

})

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    t.textContent = '-';
    s.textContent = '-';
    msTens.textContent = '-';
    msHundreds.textContent = '-';
    digitDiv.forEach((item) => item.classList.remove('redDigit'))
})
