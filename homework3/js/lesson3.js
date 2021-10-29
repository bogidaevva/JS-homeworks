"use strict";

//1
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];

let summ = 0;
let index = 0;
let arithm;

for (let arr of nums) {
     for (let number of arr) {
        number += 10;
        summ += number;
        index += 1;
     }
}
arithm = summ / index;
console.log(arithm);

//2 
let min = 5;
let max = 300;

function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNum;
let arr = [];

let iMin = 0, iMax = 0;

for (let i = 0; i < 7; i++) {
    randomNum = getRandom(min,max);
    arr.push(randomNum);
    if (randomNum < arr[iMin]) {
        iMin = i;
    }
    if (randomNum > arr[iMax]) {
        iMax = i;
    }
}
console.log(arr);
console.log(`Минимальное значение массива - ${arr[iMin]}`);
console.log(`Максимальное значение массива - ${arr[iMax]}`);

let swap = arr[iMin];
arr[iMin] = arr[iMax];
arr[iMax] = swap;

console.log(arr);

//3
let array = [2, -4, 6, 9, -1, -8, -9, 10, 2, 0, -4];
let newArray = [];

console.log(array);

for(let i = 0; i < array.length; i++){
    if (array[i] < 0) {
        newArray.push(array[i]);
        array.splice(i, 1);
        i--;
    }
}

console.log(array, newArray);

//4
let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];

let enterLogin = prompt("Введите логин.");
/*
while (true){
    if (logins.includes(enterLogin)) {
        alert("Логин верный!");
        break;
    } else {
        enterLogin = prompt("Попробуйте еще раз.");
    }
}*/

while (!logins.includes(enterLogin)){
    enterLogin = prompt("Попробуйте еще раз.");
}
console.log("Был введен верный логин");

//5
let oldLogins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];

let enterNewLogin = prompt("Придумайте логин.");

while (true) {
    if(!(oldLogins.includes(enterNewLogin))) {
        oldLogins.push(enterNewLogin);
        alert("Добавлен новый логин.")
        break;
    } else {
        enterNewLogin = prompt("Такой логин уже существует, придумайте новый.");
    }
}
console.log(oldLogins);