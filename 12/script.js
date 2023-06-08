/*
 Capturar dois números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

 E para cada operação, mostrar um alerta com o resultado.
 */

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

let par = sum % 2 === 0
let iguais = firstNumber == secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if (par) {
  alert('A soma dos dois números é PAR: ' + sum)
} else alert('A soma dos dois números é ÍMPAR: ' + sum)

if (iguais) {
  alert('Os dois números inseridos são iguais')
} else alert('Os dois números inseridos são diferentes')
