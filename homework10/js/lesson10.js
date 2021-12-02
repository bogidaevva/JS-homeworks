"use strict";
// 2 
// Задача на отображение товаров 
// (вывод информации в html реализован в файле lesson9/js/dom.js).
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/1000"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/1000"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/1000"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/1000"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/1000"
    }
};
let cardsSection = document.querySelector(".cards-section"); 
Object.values(goods).forEach((obj) => {
    let card = document.createElement("div");
    card.classList.add("card"); 

    let title = document.createElement("h2");
    title.innerText = obj.title; 

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img); 

    let price = document.createElement("p");
    price.innerText = `${obj.price} руб.`;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (obj.count !== 0) {  
        count.innerHTML = `
        <button class="decrease">-</button> 
        <span>0</span> 
        <button class="increase" data-count="${obj.count}">+</button>
        `;
        // повесить data с максимальным значением count, либо с названием, а потом доставать объекты по названию 
    } else {
        count.innerHTML = "<span>Нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
});
// Добавить обработчики событий кнопкам (-) и (+). 
let countInfo = Array.from(document.getElementsByClassName("card__count-info"));
for (let elem of countInfo){
    elem.addEventListener('click', changeCount);
}
// При каждом нажатии на (+) количество книг должно увеличиваться на 1 
// (выводимое в html значение не может быть больше значения свойства count); 
function changeCount(event){
    let clickElem = event.target; // <button>-</button> 
    if (clickElem.classList.contains("increase") && 
        clickElem.previousElementSibling.innerHTML < parseInt(clickElem.dataset.count)) {
            ++clickElem.previousElementSibling.innerHTML;
    } else if (clickElem.classList.contains("decrease") && clickElem.nextElementSibling.innerHTML > 0) {
            --clickElem.nextElementSibling.innerHTML;
    }
}
// при каждом нажатии ни (-) количество книг должно уменьшаться на 1 
// (выводимое в html значение не может быть меньше 0);

//1 Задача на генерацию игрового поля (часть 2).
let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
}
function generateField(n){ 
    if(n < 3) return; 
    let table = document.createElement("table"); 
    table.style.backgroundColor = "black";
    for (let i = 0; i < n; i++){ 
        let row = table.insertRow(i); 
        for (let i = 0; i < n; i++) { 
            let cell = row.insertCell(i); 
            cell.style.backgroundColor = "white";
            cell.style.height = `${n}rem`;
            cell.style.width = `${n}rem`;
            cell.classList.add("field-td");
        }
    }
    document.body.append(table);
    let getRandom = (arr) => Math.floor(Math.random() * ((arr.length - 1) + 1));
    let cells = document.querySelectorAll(".field-td");
    for (let i = 0; i < 3; i++) {
       cells[getRandom(Array.from(cells))].setAttribute("prise", Object.values(prises)[getRandom(Object.values(prises))]);
    }
}
generateField(4);

// Пользователю дается определенное количество попыток, чтобы найти приз, 
// если ему удается найти спрятанный приз за указанное количество попыток, то отобразить пользователю его приз, 
// если не удалось, то вывести информацию об этом. 
// После каждой попытки отображать, сколько попыток осталось. 
// Если пользователь получил приз или закончились попытки, он не может продолжить игру (удалить обработчик события).

let table = document.querySelector("table");

table.addEventListener('mouseover', function(){
    alert("У вас есть 3 попытки, чтобы найти приз, удачи!");
}, {once: true});
console.log(table);

table.addEventListener('click', isPrise);
let attempt = 0;
function isPrise(event){
    let clickElem = event.target;
    attempt++;
    if (attempt > 3) {
        alert ("Увы, вам не удалось найти приз. Игра окончена.");
        this.removeEventListener('click', isPrise)
        return
    }
    if (clickElem.hasAttribute("prise")) {
        alert (`Поздравляем! Ваш выигрыш - ${clickElem.getAttribute("prise")}! Игра окончена.`);
        this.removeEventListener('click', isPrise)
    } else {
        alert(`Количество оставшихся попыток: ${3-attempt}.`);
    }
}


