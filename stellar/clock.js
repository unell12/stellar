const clockDiv = document.querySelector('#clockDiv')
const clock = clockDiv.querySelector('h2')

function getTime(){
    const date = new Date()
    const time = date.getHours()
    const mim = date.getMinutes()
    const sec = date.getSeconds()

    clock.textContent = `${time > 12 ? time - 12 : time}:${mim < 10 ? '0' + mim : mim}`
}

setInterval(getTime, 1000)