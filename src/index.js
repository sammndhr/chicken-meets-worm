import printMe from './print.js'
import './style.css'
function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'

  element.innerHTML = 'Hello'
  element.classList.add('hello')
  element.appendChild(btn)
  btn.onclick = printMe
  return element
}

document.body.appendChild(component())
