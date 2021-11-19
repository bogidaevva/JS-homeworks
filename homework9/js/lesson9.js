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

let petsSection = document.createElement("section");

for (let obj of animals) {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h3");
    name.innerText = obj.name;

    let age = document.createElement("span");
    age.innerText = obj.age;

    let color = document.createElement("span");
    color.innerText = obj.color;

    let additInfo = document.createElement("div");
    additInfo.classList.add("additional-info");

    let vaccine = document.createElement("span");
    Object.values(obj).forEach((prop) => {
        if (prop.vaccinations === true) vaccine.innerText = "вакцинация есть";
        else vaccine.innerText = "вакцинации нет";
    });

    let pass = document.createElement("span");
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

function generateTable(arr){
    let table = document.createElement("table");
    table.classList.add("generate-table");
    table.style.backgroundColor = "#7E60A1";
    //создаем первую строку таблицы с названиями столбцов
    let row = table.insertRow(0);
    row.style.cssText = "background-color: #C999FF; text-align: center";
    for (let key in arr[0]) {
        let cell = row.insertCell();
        cell.innerText = key.toLocaleUpperCase();
    }

    for (let obj of arr){
        let row = table.insertRow();
        for (let key in obj){
           let cell = row.insertCell();
           cell.innerText = obj[key];
           cell.style.cssText = "background-color: #fff; text-align: center; padding-top: 8px; padding-bottom: 8px";
        }
    }
    document.body.append(table);
}

generateTable(goods);
generateTable(articles);

// TODO 
// books-section: отобразить информацию о книгах
/*
для каждого жанра отдельный div:
<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>
*/

let booksByGenre = [  
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

let bookSection = document.getElementsByClassName("books-section")[0];

function addBooks(booksArr, element) { //в element все это добавляем class = "books-section"
    //1 перебираем массив booksArr = [{Crafts [книги {}{}{}]} {Thriller [книги{}{}{}]}]:
    for (let bookGenre of booksArr){ // в bookGenre копируется название {Crafts [книги {}{}{}]}
        // bookGenre = [книги {}{}{}]
        //1.1 создаем большой внешний див
        let genreDiv = document.createElement("div");
        genreDiv.classList.add("genre");
        //1.2 создаем заголовок h2
        let genreTitle = document.createElement("h2");
        genreTitle.innerText = bookGenre.genreName;
        //1.3 создаем div class="books"
        let booksDiv = document.createElement("div");
        booksDiv.classList.add("books");
        //1.4 перебор booksArr.books
        for (let book of bookGenre.books){
            //создаем article (все содержимое article через innerHTML)
            let bookArticle = document.createElement("article");
            bookArticle.innerHTML = `
                <span>${book.title}</span>
                <img src="${book.img}" alt="${book.title}">
                <p>${book.description}</p> 
                <a>Читать</a>
            `
            //на каждой итерации в див с книгами вкладываем созданную article с конкретной книгой 
            booksDiv.append(bookArticle);
        }
        //вкладываем див с книгами жанра и заголовок в большой див 
        genreDiv.append(genreTitle, booksDiv);
        element.append(genreDiv);
    }
}
addBooks(booksByGenre, bookSection);

//3
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
    let getRandom = (arr) => Math.floor(Math.random() * (arr.length+1));
    let cells = document.getElementsByClassName("field-td");
    for (let i = 0; i < 3; i++) {
        cells[getRandom(cells)].setAttribute("prise", Object.values(prises)[getRandom(Array.from(prises))]);
    }
}

generateField(4);