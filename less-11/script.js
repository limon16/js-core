'use strict';

const getS = selector => document.querySelector(selector);
const addTime = (num) => num < 10 ? `0${num}` : `${num}`;

const addTimeS = (num) =>
    num < 10 ? `00${num}` :
        num > 10 && num < 99 ? `0${num}` :
            num > 99 ? `${num}` :
                `${num}`;


setInterval(() => {
    let date = new Date();

    getS('.fullDate').innerHTML = `${addTime(date.getDate())}.${addTime(date.getMonth() + 1)}.${addTime(date.getFullYear())}`;
    getS('.fullTime').innerHTML = `${addTime(date.getHours())}:${addTime(date.getMinutes())}:${addTime(date.getSeconds())}`;
});


// function setTime() {
//     let date = new Date();

//     getS('.fullDate').innerHTML = `${addTime(date.getDate())}.${addTime(date.getMonth() + 1)}.${addTime(date.getFullYear())}`;
//     getS('.fullTime').innerHTML = `${addTime(date.getHours())}:${addTime(date.getMinutes())}:${addTime(date.getSeconds())}`;
// }

let timeID;

getS('.btn-start-sec').addEventListener('click', () => {
    let day = 0, hh = 0, mm = 0, ss = 0, ms;
    if (getS('.btn-start-sec').classList.contains("inactive") === true) {
        return;
    }
    runnningCondition();

    let startTime = Date.now();
    timeID = setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        ms = (elapsedTime / 1000).toFixed(3);
        ss = ms.toString().slice(0, ms.indexOf("."));
        ms = +ms.toString().slice(ms.indexOf(".") + 1);
        if (ss >= 60) {
            mm++;
            ss -= 60;
        }
        if (mm >= 60) {
            hh++;
            mm -= 60;
        }
        if (hh >= 24) {
            day++;
            hh -= 24;
        }

        getS('.sec1').textContent = addTime(day);
        getS('.sec2').textContent = addTime(hh);
        getS('.sec3').textContent = addTime(mm);
        getS('.sec4').textContent = addTime(ss);
        getS('.sec5').textContent = addTime(ms);
    }, 100);



})

getS('.btn-stop-sec').onclick = function () {
    if (getS('.btn-stop-sec').classList.contains("inactive") === true) {
        return;
    }
    stopCondition();
    clearInterval(timeID)
}

getS('.btn-reset-sec').onclick = function () {
    if (getS('.btn-reset-sec').classList.contains("inactive") === true) {
        return;
    }
    startCondition();

    getS('.sec1').textContent = '00';
    getS('.sec2').textContent = '00';
    getS('.sec3').textContent = '00';
    getS('.sec4').textContent = '00';
    getS('.sec5').textContent = "000";

    getS('.result-box').innerHTML = ``;
}

getS('.btn-loop-sec').onclick = function () {
    getS('.result-box').innerHTML += `<span class="result">${getS('.sec').textContent}</span>`;
}


function startCondition() {
    getS('.btn-start-sec').classList.remove("inactive");
    getS('.btn-stop-sec').classList.add("inactive");
    getS('.btn-reset-sec').classList.add("inactive");
}

startCondition();

function runnningCondition() {
    getS('.btn-start-sec').classList.add("inactive");
    getS('.btn-stop-sec').classList.remove("inactive");
    getS('.btn-reset-sec').classList.add("inactive");
}

function stopCondition() {
    getS('.btn-start-sec').classList.remove("inactive");
    getS('.btn-stop-sec').classList.add("inactive");
    getS('.btn-reset-sec').classList.remove("inactive");
}

let i = 0;

getS('.btn-plus-timer').onclick = function () {
    i = +getS('.timer-back').textContent;
    i++;
    getS('.timer-back').textContent = `${i}`;
}

getS('.btn-minus-timer').onclick = function () {
    i = +getS('.timer-back').textContent;
    i--;
    getS('.timer-back').textContent = `${i}`;
}

let timeSec;
getS('.btn-start-timer').onclick = function () {


    let min = +getS('.timer-back').textContent;
    let sec = 60;

    let mm = 0, ss = 0, ms = 0;

    if (getS('.btn-start-timer').classList.contains("inactive") === true) {
        return;
    }
    runnningConditionEnd();

    let startTime = Date.now();
    timeSec = setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        ms = (elapsedTime / 1000).toFixed(3);
        ss = ms.toString().slice(0, ms.indexOf("."));
        ms = +ms.toString().slice(ms.indexOf(".") + 1);
        if (ss <= 60) {
            mm++;
            ss -= 60;
            sec -= 1;
        }
        if (mm >= 60) {
            mm -= 60;
            min -= 1;
            sec = 60;
        }

        getS('.minEnd-one').textContent = `${min}`;
        getS('.minEnd-two').textContent = `${sec}`;
    }, 1000);
}


getS('.btn-stop-timer').onclick = function () {
    if (getS('.btn-stop-timer').classList.contains("inactive") === true) {
        return;
    }
    stopConditionEnd();
    clearInterval(timeSec);
}

getS('.btn-reset-timer').onclick = function () {
    if (getS('.btn-reset-timer').classList.contains("inactive") === true) {
        return;
    }
    startConditionEnd();

    getS('.minEnd-one').textContent = +getS('.timer-back').textContent;;
    getS('.minEnd-two').textContent = '00';
}


function startConditionEnd() {
    getS('.btn-start-timer').classList.remove("inactive");
    getS('.btn-stop-timer').classList.add("inactive");
    getS('.btn-reset-timer').classList.add("inactive");
}

startConditionEnd();

function runnningConditionEnd() {
    getS('.btn-start-timer').classList.add("inactive");
    getS('.btn-stop-timer').classList.remove("inactive");
    getS('.btn-reset-timer').classList.add("inactive");
}

function stopConditionEnd() {
    getS('.btn-start-timer').classList.remove("inactive");
    getS('.btn-stop-timer').classList.add("inactive");
    getS('.btn-reset-timer').classList.remove("inactive");
}
