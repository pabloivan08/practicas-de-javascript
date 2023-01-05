const title = document.querySelector('.title')
const input1 = document.querySelector('#calc1')
const input2 = document.querySelector('#calc2')
const button = document.querySelector('.button')
const result = document.querySelector('.result')

const isNumber = (value) => !isNaN(+value) ?  +value : value

const actionButton = () => {
  const resultado = isNumber(input1.value) + isNumber(input2.value)

  result.innerText = `${input1.value} + ${input2.value} = ${resultado}`
}

button.addEventListener('click', actionButton)