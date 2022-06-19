// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
    const number = 2 
    const extend = 10

    //Вариант 1
    let val = 1
    for(let i = 1; i <= extend; i++) {
        val = val * number;
        console.log(number + ' в стпени ' + i + ' будет ' + val)
    }

    //Вариант 2
    for(let i = 1; i <= extend; i++) {
        let val = Math.pow(number, i)
        console.log(number + ' в стпени ' + i + ' будет ' + val)
    }



// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
    function exponentiate (ext) {
        let val = 1
        const number = 2
        for(let i = 1; i <= ext; i++) {
           val = val * number;
           console.log(number + ' в стпени ' + i + ' будет ' + val)
        }
    }
    exponentiate(extend)



/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/
    const smile = ':)'
    let strSmile = smile
    for(let i = 1; i <= 5; i++) {
        console.log(strSmile)
        strSmile = strSmile + smile
    }



/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
(как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)*/
    let numberOfRows = 10
    function printSmile(stroka, numberOfRows) {
        let strSmile = stroka
        for(let i = 1; i <= numberOfRows; i++) {
            console.log(strSmile)
            strSmile = strSmile + stroka
        }
    }
    printSmile(smile, numberOfRows)



/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, 
и сколько согласных букв. e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'
*/
    const valString = 'case'
    const valString1 = 'Case'
    const valString2 = 'Check-list'

    function getWordStructure (wodr) {
        const count = {                     //создали объект куда записываем количество гласных/не гласных букв
            glasnye : 0,
            soglasnie : 0
        }
        wodr = wodr.toLowerCase()           //для более простого сканирования, переводим все слово в нижний регистр
        for (let i = 0; i < wodr.length; i++) {      // циклом перебираем строку по буквам, сравниваем и записываем кол. в объект  
            if(wodr[i].match(/[aeiou]/)) {                  
                count.glasnye = count.glasnye + 1
            } else if (wodr[i].match(/[bcdfghjklmnpqrtsvwxyz]/)) {
                count.soglasnie = count.soglasnie + 1
            }
        }
        return count    //функция возвращает обьект
    }
    const count = getWordStructure(valString2)  // результат функции присваиваем в объект

    console.log('Слово ' + valString2 + ' состоит из ' + count.glasnye + ' гласных и ' + count.soglasnie + ' согласных букв')

    
/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/
const str1 = 'abba'
function isPalindrom (word) {
    word = word.toLowerCase()

    let objPalindrom = word.split("").reverse().join("");   // так и не понял, как работает просто нагуглил
    if(word == objPalindrom) {
        return 'Слово является палиндромом'
    } else {
        return 'Слово не палиндромом'
    }
}
let result = isPalindrom(str1)
console.log(result)