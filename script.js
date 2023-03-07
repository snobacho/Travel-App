const container = document.querySelector('.container')

document.querySelector('.open-navbar-inon').addEventListener('click', (e) => {
    e.stopPropagation()
    container.classList.add('change')
})
document.querySelector('.close-navbar-icon').addEventListener('click', (e) => {
    e.stopPropagation()
    container.classList.remove('change')
})

window.addEventListener('click', function(e) {      // * close navbar 
    e.stopPropagation()
    container.classList.remove('change')
})

const colors = ['#000B0B', '#065E64','#000B0B','#065E64', '#080500' ]

let i = 0

Array.from(document.querySelectorAll('.nav-link'))
.forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`
})

Array.from(document.querySelectorAll('.navigation-button'))
.forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList
        .toggle('change')
    }
}) 