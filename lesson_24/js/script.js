"use strict"
console.log("lesson 24")
//////       Practic
console.log("Practic")
let a=2
let b="2"

if (a==b) {
    console.log('2=="2" - true')
}

if (a===b) {
    console.log('2==="2" - true')
} else if (a!==b) {
    console.log('2!=="2" - true')
}

if(2<3 && 5+7 || 5>7) {
    console.log('its true')
}

let x=5+7>=12?true:false
console.log(`5+7>=12 is ${x}`)

let testArray=['January', 'February', 28, 44, true]

console.log(typeof testArray)
console.log(`The length of testArray is ${testArray.length} items`)
console.log(`The second item of testArray is ${testArray[1]}`)


testArray.push("last")
for(let i=0; i<testArray.length; ++i) {
    console.log(`Items number - ${i+1}, items type - ${typeof testArray[i]}`)
}

console.log(`random number - ${Math.random()}`)

testArray.forEach((a, i) => {
    console.log(`${i} - ${a}`)
})

let c=3
let f=4

function addVariables (a=0, b=0) {
    return a+b
}

// let g = addVariables(c, d)
console.log(`result is ${addVariables(c,f)}`)


//////       Homework
console.log("Homework")
///////////////////////////////////////////////////////////////////////////////////////
//Задача №1
let someVar = 0;
// спочатку створиться змінна someVar, їй присвоїться значення 0
++someVar;
// змінна someVar збільшується на 1
if (someVar) {
    console.log(someVar);
}
// змінна someVar переводиться у тип boolean, результат "true"
// значення змінної someVar (1) виводиться в консоль


///////////////////////////////////////////////////////////////////////////////////////
// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

for(let i=1; i<11; ++i) {
    console.log(`Пункт №${i}`)
}

///////////////////////////////////////////////////////////////////////////////////////
//     Задача №3
// Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
//     console.log('000');
// }

// спочатку виконуються арифметичні дії (перевфрка умови if), потім порівняння, результат порівняння true або false
// false || false && true || false

// виконується дія логічного оператора з найвищим приорітетом &&
// false || false || false

// if (false) {
//     console.log('000');
// }
// результат false, отже умова оператора if,
// ВІДПОВІДЬ - в консоль нічого не потрапить


///////////////////////////////////////////////////////////////////////////////////////
// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

function divNumbers (a=1, b=1) {
    if (b == 0)
        return `На 0 ділити не можна!`
    else 
        return ((typeof (+a / +b)) == "number" && !isNaN(+a / +b)) ? `Результат ділення: ${+a / +b}` : `невірний тип даних`
}

console.log(`6/2 ${divNumbers(6, 2) }`)
console.log(`${divNumbers()}`)
console.log(`5/0 ${divNumbers(5, 0)}`)
console.log(`"10"/5 ${divNumbers("10", 5)}`)
console.log(`"5x"/5 ${divNumbers("5x", 5)}`)
console.log(`234.432/12.3 ${divNumbers(234.432 , 12.3)}`)
console.log(`"Маша"/"Саша" ${divNumbers("Маша" , "Саша")}`)


///////////////////////////////////////////////////////////////////////////////////////
// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

let anotherArray=["seven", 11, 10, true, "one"]
anotherArray.forEach( a => {
    if(a===10) 
        console.log(a)
})