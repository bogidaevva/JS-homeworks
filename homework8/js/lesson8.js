"use strict";
// 1
let newMap = new Map();

newMap.set("login1", "moscow").set("login2", "seattle").set("login3", "barcelona").set("login4", "moscow");

function getLogins(map, town){
    let logins = [];
    for (let pair of map.entries()){
        if (pair[1] === town) logins.push(pair[0]);
    }
    return logins;
}

console.log(getLogins(newMap, "moscow"));

// 2 
let words = ["bird", "east", "bird", "idea", "mountain", "science", "idea"];

function getMap(arr) {
    let map = new Map();
    for (let elem of arr) {
        if (map.has(elem)) {
            map.set(elem, map.get(elem) + 1);
        } else {
            map.set(elem, 1);
        }
    }
    return map;
}
    
console.log(getMap(words));

// 3 
let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

function getNewMap(map, ageFrom, ageTo){
    let newMap = new Map();
    for (let pair of map.entries()){
        if (pair[1].age >= ageFrom && pair[1].age <= ageTo) newMap.set(pair[0], pair[1]);
    } 
    return newMap;
}

console.log(getNewMap(customerMap, 18, 40));

