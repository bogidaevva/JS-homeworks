"use strict";

//1
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    },
}

function getNewObject(obj, from, to) {
    if (isNaN(from) || isNaN(to) || typeof obj !== "object" || obj === null) return false;
    let newObj = obj;
    let getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }
    for (let internalObj in newObj){
        newObj[internalObj].price = getRandom(from, to);
    }
    return newObj;
}

console.log(getNewObject(goods, 1000, "1100px"));
let str = "goods";
console.log(getNewObject(str, 1000, 1100));
console.log(getNewObject(goods, 1000, 1100));

//2 
function reduceCount(obj, title, countToCart) {
    if (typeof title !== "string" || typeof obj !== "object" || obj === null || isNaN(countToCart)) return false;
    for (let internalObj in obj) {
        if (obj[internalObj].title === title) {
            if (obj[internalObj].count > countToCart) {
                obj[internalObj].count =  obj[internalObj].count - countToCart;
                return true
            }
            console.log("Невозможно уменьшить значение свойства ​count на countToCart")
            return false 
        }
    }
}

console.log(reduceCount(goods, "Гитара", 50));
console.log(reduceCount(goods, "Барабаны", 10));

//3
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'}, 
    { author: 'Толстой', title: 'Война и мир'}, 
    { author: 'Лермонтов', title: 'Тамань'}, 
    { author: 'Гончаров', title: 'Обломов'}, 
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
    { author: 'Пушкин', title: 'Руслан и Людмила'}, 
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function createNewArr(obj, author) {
    if (typeof author !== "string") return;
    author = author.trim();
    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    author = capitalizeFirstLetter(author);
    let newArr = [];
    for (let internalObj of obj){
        if(internalObj.author === author) newArr.push(internalObj.title)
    }
    return newArr;
}

console.log(createNewArr(books, "пушкин"));
console.log(createNewArr(books, "Маяковский"));