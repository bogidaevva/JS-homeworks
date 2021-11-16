"use strict";
//1
let animals = [
    {
        "name": "Люся", 
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, 
"passport": true}
    },
    {
        "name": "Том", 
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, 
"passport": false}
    },
    {
        "name": "Макс", 
        "age": 2,
        "color": "серый",
        "additional_info": {"vaccinations": false, 
"passport": true}
    },
    {
        "name": "Василий", 
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, 
"passport": true}
    }
];

/*  <section>
        <div class = "card">
            <h3>Люся</h3>
            <span class = "age">1 год</span>
            <span class = "color">трехцветная</span>
            <div class = "additional-info">
                <span class = "vaccinations">вакцинация есть/нет</span>
                <span class = "passport">паспорт есть/нет</span>
            </div>
        </div>
        <div class = "card">
            <h3>Том</h3>
            <span class = "age">3 месяца</span>
            <span class = "color">белый</span>
            <div class = "additional-info">
                <span class = "vaccinations">вакцинация есть/нет</span>
                <span class = "passport">паспорт есть/нет</span>
            </div>
        </div>
        <div class = "card">
            <h3>Макс</h3>
            <span class = "age">2</span>
            <span class = "color">серый</span>
            <div class = "additional-info">
                <span class = "vaccinations">вакцинация есть/нет</span>
                <span class = "passport">паспорт есть/нет</span>
            </div>
        </div>
        <div class = "card">
            <h3>Василий</h3>
            <span class = "age">3</span>
            <span class = "color">черный</span>
            <div class = "additional-info">
                <span class = "vaccinations">вакцинация есть/нет</span>
                <span class = "passport">паспорт есть/нет</span>
            </div>
        </div>
    </section> */

let petsSection = document.createElement("section");

for (let obj of animals) {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h3");
    name.innerText = obj.name;

    let age = document.createElement("span");
    age.classList.add("age");
    age.innerText = obj.age;

    let color = document.createElement("span");
    color.classList.add("color");
    color.innerText = obj.color;

    let additInfo = document.createElement("div");
    additInfo.classList.add("additional-info");

    let vaccine = document.createElement("span");
    vaccine.classList.add("vaccinations");
    Object.values(obj).forEach((prop) => {
        if (prop.vaccinations === true) vaccine.innerText = "вакцинация есть";
        else vaccine.innerText = "вакцинации нет";
    });

    let pass = document.createElement("span");
    pass.classList.add("passport");
    Object.values(obj).forEach((prop) => {
        if (prop.passport === true) pass.innerText = "паспорт есть";
        else pass.innerText = "паспорта нет";
    });
        
    additInfo.append(vaccine, pass);
    card.append(name, age, color, additInfo);
    petsSection.append(card);
}

document.body.append(petsSection);

//2

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    },
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25,
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40,
    },
    {
        title: "Drum",
        price: 2700,
        count: 12,
    },
    {
        title: "Flute",
        price: 900,
        count: 0,
    },
    {
        title: "Harp",
        price: 3400,
        count: 5,
    }
];

// function generateTable(arr){
//     let table = document.createElement("table");
//     //[{} {} {} {}]
    
//     for (let obj of arr) {
//         // {
//         //     title: "Piano",
//         //     price: 3000,
//         //     count: 25,
//         // }
    

//     document.body.append(table);
    
// }

// console.log(generateTable(articles));