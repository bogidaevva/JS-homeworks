"use strict";

//1
function getDay(num) {
    let daysOfWeek = [ , "понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    num = parseInt(num);
    if (num < 1 || num > 7) return "Введите число от 1 до 7.";
    return daysOfWeek[num];
}

let getNumber = "4";
console.log(getDay(getNumber));

//2
let arr = [4, 0, 7, 10, 5];

function addElem (elem) {
    if (!(arr.includes(elem))) arr.push(elem);
}

addElem(1);
console.log(arr);

//3
function getRandomArr (originalArr) {
    let randomArr = [], randomIndex;
    let getRandom = (min,max) => {return Math.floor(Math.random() * (max - min + 1) + min)};
    let randomIteration = getRandom(0, 3);
    for (let i = 0; i < randomIteration; i++) {
        randomIndex = getRandom(0, originalArr.length-1);
        randomArr.push(originalArr[randomIndex]);
    }
    return randomArr;
}

let months = ["Апрель", "Июль", "Октябрь", "Май"];
console.log(getRandomArr(months));

//4
let text = "самое длинное слово в предложении";

function getWord (someText) {
    let arr = someText.split(" ");
    let getLonger = (a, b) => {return a.length - b.length}
    arr.sort(getLonger);
    return arr[arr.length-1];
}

console.log(getWord(text));

//5 
let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];

let array = first.filter(elem => second.includes(elem));

console.log(array);

//6
let temps = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

for (let temp of temps) {
    if (temp.some(t => t > 500)) {
        console.log("В массиве есть показатель температуры выше 500.")
    }
}

//7
let someStr = "пРОверКа";

function changeStr (str) {
    str = str.toLowerCase();
    let arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

console.log(changeStr(someStr));