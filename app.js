const inpVer = Array.from(document.querySelectorAll('.inp_ver1'))
const oneInput = document.querySelector('.inp_ver1')
const timerCont = document.querySelector('.timer')
const modalBtn = document.querySelector('.modal_btn')
const modalHref = Array.from(document.querySelectorAll('.modal_href1'))
const inputValues = Array.from(document.querySelectorAll('.inp_ver1'))
const icon = document.querySelector('.icon')



// const changeList = (e) => {
//   const form = document.forms['modal_form']
//   const arr = [...form.elements]
//   arr.length = 2
//   console.log('arr', arr)
// }
// console.log('changeList():', changeList());

//Создаем таймер
const timer = () => {
  let currentMin = 1
  let currentSec = 59
  let timerId = setInterval(() => {
    timerCont.innerText = `0${currentMin}:${
      currentSec < 10 ? '0' + currentSec : currentSec
    }`
    currentSec < 1 ? [(currentSec = 59), --currentMin] : --currentSec
    if (currentMin < 0) {
      clearInterval(timerId)
      toggleHref()
    }
  }, 100)
}
timerCont ? timer() : false

// Задаем ссылке стиль none
const toggleHref = () => {
  modalHref.map((el) => el.classList.toggle('none'))
}

// Функция рандомного числа
const getRandom = (length, min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return [...new Array(length)].map(
    () => Math.floor(Math.random() * (max - min)) + min
  )
}

let randomNums = getRandom(5, 0, 10)
console.log('first randomNums', randomNums)

// Делаем ссылку меняющей цвет по истечению таймера
const activeHref = () => {
  timer()
  toggleHref()
  randomNums = getRandom(5, 0, 10)
  console.log('second randomNums', randomNums)
}

// Проходимся по полям ввода и записываем / удаляем значения
inpVer
  ? inpVer.map((el, index) =>
      el.addEventListener('input', () => {
        if (el.value.length >= 1 && index < inpVer.length - 1) {
          inpVer[index + 1].focus()
        } else if (el.value.length === 0 && index > 0) {
          inpVer[index - 1].focus()
        }
      })
    )
  : false


// Проверяем пароль с рандомом и меняем цвет кнопки
const showTrue = (arr1, arr2) => {
  console.log('arr1', arr1)
  let count = 0
  arr1.forEach((el, index) => {
    el === arr2[index] ? count++ : count
  })
  console.log('count', count)
  modalBtn.style.backgroundColor = count === 5 ? 'green' : 'red'
  modalBtn.innerText =  count === 5 ? 'Entry' : 'Error' 
}

// Событие на кнопку парoля
const showValid = () => {
  let resInputValues = inputValues.map((el) => +el.value)
  showTrue(randomNums, resInputValues)
  document.getElementById('newStr').innerHTML =
  'Подсказка - ваш пароль: ' + randomNums.join(' ')
}

// const showTrue = () => {
//   modalBtn.style.backgroundColor= randomNums.every((el, index) => el === values[index]) ? 'green' : 'red'
// }

// Icon
const showInputType = (icon) => {
const input = icon.nextElementSibling
input.classList.toggle('visible')
input.type = input.classList.contains('visible')
? 'text' : 'password'
}

// const valid = () => {
//   const reg = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
//   return true
// }

const showInfo = () => {
  document.location ='./signin.html'
  alert ('Учетная запись создана')
}

const changePage = () => {
  document.location ='./verification.html'
}
