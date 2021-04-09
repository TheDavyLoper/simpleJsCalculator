const display = document.querySelector('.display')
const btns = document.querySelectorAll('button')

function calculator() {
  let pushed = this.innerHTML
  if (pushed == '=') {
    display.innerHTML = eval(display.innerHTML)
  } else if (pushed == 'AC') {
    display.innerHTML = '0'
  } else if (display.innerHTML == '0') {
    display.innerHTML = pushed
  } else {
    display.innerHTML += pushed
  }  
}

btns.forEach(btn => {
  btn.addEventListener('click', calculator)
});
