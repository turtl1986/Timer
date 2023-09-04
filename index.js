const container = document.querySelector('.container')
const containerTimer = container.querySelector('.container__timer')
const time = containerTimer.querySelector('#time')
const containerBtn = container.querySelector('.container__btn')
const start = containerBtn.querySelector('#start')
const pause = containerBtn.querySelector('#pause')
const reset = containerBtn.querySelector('#reset')

let timeTimer = 0
let id = 0

start.addEventListener('click', handleStart)
pause.addEventListener('click', handleStop)
reset.addEventListener('click', handleReced)

function handleStart (event) {
  id = setInterval(() => {
    ++timeTimer
    time.textContent = `${timeTimer}`
  }, 1000)

  event.target.setAttribute('disabled', 'true')
  pause.removeAttribute('disabled')
  reset.removeAttribute('disabled')
  container.classList.add('pulse')
}

function handleStop (event) {
  clearInterval(id)
  id = 0
  event.target.setAttribute('disabled', 'true')
  start.removeAttribute('disabled')
  reset.removeAttribute('disabled')
  container.classList.remove('pulse')
}

function handleReced (event) {
  clearInterval(id)
  id = 0
  time.textContent = `${0}`
  event.target.setAttribute('disabled', 'true')
  pause.removeAttribute('disabled')
  start.removeAttribute('disabled')
  container.classList.remove('pulse')
}
