console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageTwo.textContent = "Loading"
    messageOne.textContent = ''
    url = 'http://localhost:3000/weather?address=' + location

    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        } else {
            messageTwo.textContent = data.location
            messageOne.textContent = data.forecast

        }
    })
})
})