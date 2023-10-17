// let num = 10 // let можно поменять значение NUMBER
// let firstName = 'Vlad'  // STRING
// const isProgrammer = true //константа не меняется BOOLEAN
/* вариант 
комментария номер 
2 
*/
//firstName = 'Vlad'
//isProgrammer = false



//CAN DO 
/* let $ = 'test'
// let $num = 42
// let num$ = 42
// let _ = 49
// let _num = 12
// let num_ = 12
// let first_name = 'Vlad' //неправильный стиль написания 
// let myNum = 42
// let num42 = 10 */


 // ЗАПРЕЩЕННЫЕ ПЕРЕМЕННЫЕ 
/*  let 42num = 11  //нельзя начинать с цифр 
//  let my-num = 11 //нельзя через дефис
//  let false
//  let let    // нельзя служебные слова 
//  let const */


/*alert (firstName)
//console.log('test:', firstName, isProgrammer)

// console.log(num + 10)
// console.log(num * 10)
// console.log(num - 10)
// console.log(num / 10)
//console.log(num)

// let num2 = num + 15
// console.log(num, num2)

// num = num2 - num
// num2 = num2 + 5
// console.log(num, num2)

// let num3 = (num + 10)*2/(3-1)
// console.log(num3)
//const fullName = (firstName + ' Vakula')
//const fullName = (firstName +' ' +'Vakula')
// const fullName = (firstName + '\n'+ ' Vakula')
// console.log(fullName) */


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multyBtn = document.getElementById('multy')
const sepBtn = document.getElementById('sep')
let action = '+'
plusBtn.onclick = function (){
    action = '+'

}
minusBtn.onclick = function (){
    action = '-'
}
multyBtn.onclick = function (){
    action = '*'
}
sepBtn.onclick = function (){
    action = '/'
}
// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2)/ num

function printResult(result){
    if (result < 0) {
        resultElement.style.color = 'red'
    } else { resultElement.style.color = 'green'
}
    resultElement.textContent = result

}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
const num1 = Number(inp1.value)
const num2 = Number(inp2.value)
if (actionSymbol == '+'){
  return num1 + num2 

} else if (actionSymbol == '-'){
   return num1 - num2
}else if (actionSymbol == '*'){
    return num1 * num2
 }else if (actionSymbol == '/'){
    return num1 / num2
 }
}

//console.log(typeof sum) //тип данных!!
 
submitBtn.onclick = function(){
    const result = computeNumbersWithAction(input1, input2, action)
printResult(result)}
/*submitBtn.onclick = function (){
//     if (action == '+' ) {
//     const sum = Number(input1.value) + Number(input2.value)
//     printResult(sum)
// }
//  else if (action == '-' ){// или просто else если не важно условие 
// const sum = Number(input1.value) - Number(input2.value)
// printResult(sum)
// }
// } */
