const container = document.querySelector('.container')

// document.querySelector('.open-navbar').addEventListener('click', () => {
//     container.classList.add('change')
// })
// document.querySelector('.close-navbar').addEventListener('click', () => {
//     container.classList.remove('change')
// })

const colors = ['#6495ed', '#7fffd4','#6495ed','#7fffd4', '#6495ed' ]

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