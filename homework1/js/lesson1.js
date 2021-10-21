"use strict"

//1 
let e = 11;
let f = 2;

let result = e % f;

console.log(result > 0 ? 'Заданное число является нечетным' : 'Заданное число является четным');

//2
let length, width, height;

length = 10;
width = 5;
height = 3;

let area = 2 * ( length * width + width * height + height * length);

console.log(area);

//3
let n = 99;
let whole = n / 10;
let remainder = n % 10;

let sum = parseInt(whole) + remainder;

console.log(sum);

//4
let x = 2;
let y = 4;

x++;
y++;

console.log(x, y);

