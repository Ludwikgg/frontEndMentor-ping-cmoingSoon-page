const input = document.querySelector('.mail-input')
const notifyBtn = document.querySelector('.notify-btn')
const subTxt = document.querySelector('.sub-txt')
const errTxt = document.querySelector('.err-txt')


const checkErr = () => {
    if (input.value !== '') {
        input.value = ''
        subTxt.textContent = 'Thanks for subscribe!'
        errTxt.style.display = 'none'
        input.style.border = 'var(--pale-blue) 1.5px solid'
    } else {
        errTxt.style.display = 'block'
        input.style.border = 'red 1.5px solid'
    }
}

const checkEnter = e => {
    if (e.key === 'Enter') {
        checkErr()
    }
}

input.addEventListener('keyup', checkEnter)
notifyBtn.addEventListener('click', checkErr)