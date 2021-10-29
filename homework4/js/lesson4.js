"use strict";

//1
function getGoods(count) {
    if (count >= 11 && count <= 14) return `${count} товаров`;
    if (count % 10 == 1) return `${count} товар`;
    if (count % 10 >= 2 && count % 10 <= 4) return `${count} товара`;
    return `${count} товаров`
}

let goods = parseInt(prompt("Введите количество товаров."))
console.log(getGoods(goods));

//2
function range(start, end, step = 1) {
    let arr = [];
    for (; start < end; start += step) {
        arr.push(start);
    }
    return arr;
}

console.log(range(1, 10, 2));

//3
//3.1 Как проверить значение на определенный тип данных?
//Использовать оператор typeof, который возвращает строку, указывающую тип операнда

console.log(typeof 45);//number
console.log(typeof 1.567);//number
console.log(typeof NaN);//number, несмотря на то, что это "Not-A-Number" 
console.log(typeof Infinity);//number

console.log(typeof "");//string
console.log(typeof "something");//string
console.log(typeof "100");//string
console.log(typeof (typeof 100));//string

console.log(typeof true);//boolean
console.log(typeof false);//boolean

//3.2
//Как проверить, что значение переменной было присвоено?
//Можно пойти от обратного: переменная, не имеющая присвоенного значения, обладает типом undefined
//также undefined возвращают метод или инструкция, если переменная, участвующая в вычислениях, не имеет присвоенного значения
//оператор typeof отлично подходит для проверки значения undefined

let nothing;  
console.log(typeof nothing);//undefined

let something = 100;
console.log(typeof something);//number, переменной присвоено числовое значение


//3.3 Как проверить значение на число?
//Использовать функцию isNaN(), которая определяет, является ли значение Not-a-Number 
//функция возвращает true, если значение равно NaN
//-> если функция возвращает false, перед нами число 

console.log(isNaN(46));//false
console.log(isNaN(null));//false
console.log(isNaN("46"));// false: "46" преобразуется в число 46, которое не NaN
console.log(isNaN("46.5"));// false: "46.5" преобразуется в число 46.5, которое не NaN
console.log(isNaN(""));//false: пустая строка преобразуется в 0, которое не NaN

console.log(isNaN(NaN));// true
console.log(isNaN(undefined));// true
console.log(isNaN({}));// true

