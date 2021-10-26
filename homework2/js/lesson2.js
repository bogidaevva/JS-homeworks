"use strict";
/*
//1
let count = 96;

if (count <= 100 && count >= 90) console.log("Отлично!");
else if (count <= 89 && count >= 60) console.log("Хорошо.");
else if (count <= 59 && count >= 40) console.log("Удовлетворительно.");
else if (count <= 39 && count >= 0) console.log("Попробуйте еще раз!");

//2
let firstOperand = parseInt(prompt("Введите первое число"));
let secondOperand = parseInt(prompt("Введите второе число"));
let operator = prompt("Какую операцию необходимо выполнить(+,-,*,/)?");

//если добавить .toLowerCase при любом вводе оператора выдает дефолт (узнать почему?)
switch (operator) {
    case "+": 
    case "сложение":
    case "Сложение":
        console.log(firstOperand + secondOperand);
        break;
    case "-":
    case "вычитание":
    case "Вычитание":
        console.log(firstOperand - secondOperand);
        break;
    case "*":
    case "умножение":
    case "Умножение":
        console.log(firstOperand * secondOperand);
        break;
    case "/":
    case "деление":
    case "Деление":
        console.log(firstOperand / secondOperand);
        break;
    default:
        console.log("Ошибка ввода.");
}

//3
let plates = parseInt(prompt("Введите количество тарелок."));
let cleanser = parseInt(prompt("Введите количество моющего средства."));

while (plates > 0 && cleanser > 0) {
    plates -= 1;
    cleanser -= 0.5;
    console.log("Осталось " + cleanser + " моющего средства.");
    if (plates == 0) console.log("Тарелки вымыты! Осталось " + cleanser + " моющего средства.");
    else if (cleanser == 0) console.log("Осталось " + plates + " невымытых тарелок.");
}

//4
let min = 1;
let max = 9;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let randomNum = getRandom(min , max);
console.log(randomNum);//вывела для проверки 

let userNum = parseInt(prompt("Загадайте число!")); 

while (true) {
    if (randomNum == userNum) {
        console.log("Вы угадали!"); 
        break;
    }
    if (userNum == 0) {
        console.log("Выход из программы.");
        break;
    }
    if (randomNum > userNum) {
        console.log("Загаданное число больше.");
    }
    else if (randomNum < userNum) {
        console.log("Загаданное число меньше.");
    }
    userNum = parseInt(prompt("Попробуйте еще раз!"));
}*/

//5
let min = 10;
let max = 500;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandom(min , max);

if (randomNum > 25 && randomNum < 200) console.log(`Число ${randomNum} содержится в интервале (25;200).`);
else console.log(`Число ${randomNum} не содержится в интервале (25;200).`);


//6
min = 1;
max = 100;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert("Загадайте число!");

while (true) {
    let randomNum = getRandom(min , max); 
    let isMatches = prompt(`Число равно ${randomNum}?`); 
    if (isMatches == "да") {
        console.log("Ура! Угадал!");
        break;
    } else {
        let isGreater = prompt(`Число больше ${randomNum}?`);
        if (isGreater == "да") {
           min = randomNum +1;
        } else {
            max = randomNum - 1;
        }
    }
}
