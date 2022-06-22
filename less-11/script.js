'use strict';

const getS = selector => document.querySelector(selector);
const addTime = (num) => num < 10 ? `0${num}` : `${num}`;

const addTimeS = (num) =>
        num < 10 ? `00${num}` :
        num > 10 &&  num < 99 ? `0${num}`  :
        num > 99 ? `${num}`  :
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


let day = 0, hh = 0, mm = 0, ss = 0, ms;
let timeID;

getS('.btn-start-sec').addEventListener('click', () => {
    let startTime = Date.now();
    timeID = setInterval(function init() {
        let elapsedTime = Date.now() - startTime;
        let ms = (elapsedTime/1000).toFixed(3);
        ss = ms.toString().slice(0, ms.indexOf("."));
        ms = +ms.toString().slice(ms.indexOf(".")+1);
        if(ss >= 60) {
            mm++;
            ss -= 60;
        }
        if(mm >= 60){
            hh++;
            mm -= 60;
        }
        if(hh >= 24){
            day++;
            hh -= 24;
        }

        getS('.sec').textContent = (addTime(day) + ':' + addTime(hh) + ':' + addTime(mm) + ':' + addTime(ss) + ':' + addTimeS(ms));
    }, 100);

})

getS('.btn-stop-sec').onclick = function () {
    clearInterval(timeID)
}

getS('.btn-loop-sec').onclick = function () {
    getS('.result-box').innerHTML += `<span class="result">${getS('.sec').textContent}</span>`;
}
