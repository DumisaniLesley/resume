const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

const subtitle = document.getElementById('subtitle')
const phrases = ['A Front-End Developer...', 'A UI Designer...', 'A Graphic Designer...', 'Aspiring Back-End Developer...']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

function loop() {
    isEnd = false
    subtitle.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            subtitle.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            subtitle.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length) {
                i = 0
            }
        }
    }

    const speedUp = Math.random() * (80 - 50) + 50
    const normal = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? speedUp : normal
    setTimeout(loop, time)
}

loop()
btn.addEventListener('click', navToggle)