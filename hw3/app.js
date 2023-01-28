// * Написать функцию переворота строки. 
// СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. 
// Например: myReverse("123456789") -> "987654321"


function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    console.log(newString)
}
reverseString('перевернутая строка');


// * Написать функцию которая генерирует массив из чисел 
// в определенном диапазоне с определенным шагом (по умолчанию 1). 
// Например: getRange(1, 10) -> [1,2,3,4,5,6,7,8,9,10]; 
// getRange(10, 30, 5) -> [10,15,20,25,30].

let numbers = []

function getRange(numbeOne, numbTwo) {
    for (i = numbeOne; i < numbTwo; i += 1) {
        numbers.push((i))
    }
}
getRange(5, 10)
console.log(numbers)


// * Написать функцию капитализации строк. 
// Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; 
// capitalizeString("иВАНОВ") -> "Иванов"; 
// Капитализация - это процесс преобразования строки, 
// когда первая буква становится заглавной, а остальные строчными.

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length).toLowerCase()
}
console.log(capitalizeString("nARGIZ")); // отобразит  Notebook