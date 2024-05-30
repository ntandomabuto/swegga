let price = document.getElementsByClassName('price1')[0]
let input1 = document.getElementsByClassName('quantity')[0]
let total1 = document.getElementsByName('total1')[0]
let input2 = document.querySelectorAll('input')[1]

let total2 = document.getElementsByTagName('td')[11]
let button =  document.getElementsByTagName('button')[0]
let span = document.getElementsByTagName('p')[0]

// function multiply() {
//     total1.innerText = 150.95 * input1.value
//     // total2.innerText = 180.95 * input2.value
// }  
// console.log(input1)
// input1.addEventListener('click',multiply)
// input2.addEventListener('click',multiply)
let total 

function add() {
    total1.innerText = (150.95 * input1.value).toFixed(2)
    total2.innerText = (180.95 * input2.value).toFixed(2)
    total = eval(`${total1.innerText } + ${total2.innerText}`)

    span.innerText = total.toFixed(2)
}
// // console.log(add)
button.addEventListener('click', add)