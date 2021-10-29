"use strict";

//1
let arr = [3, 90, 5, -100, 50, 0, 560, 1];

//Метод sort() сортирует элементы массива и возвращает отсортированный массив, копия массива при этом не создаётся 
//порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode, полученных путём преобразования каждого элемента в строку
//arr.sort([compareFunction]) (compareFunction - необязательный параметр, который указывает функцию, определяющую порядок сортировки)
//(чем меньше число, тем оно правее в сортировке Unicode)
arr.sort(function(a, b) {//(a = 3, b = 90)
    return a - b;
  });

console.log(arr);

//Всякий раз, когда a < b, возвращается негативное значение, 
//что ведет к тому, что меньший элемент всегда будет выставляться левее большего