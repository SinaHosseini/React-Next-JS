import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="container">
    <h1>Phase 0 Training</h1>
    <p id="message">این متن اولیه است.</p>
    <button id="changeBtn">تغییر متن</button>
  </div>
`

const message = document.querySelector('#message')
const button = document.querySelector('#changeBtn')

button.addEventListener('click', () => {
  message.textContent = 'متن با موفقیت تغییر کرد! 🎉'
})
