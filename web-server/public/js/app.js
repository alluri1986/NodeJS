console.log('Client side javascript loaded')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageBox1 = document.querySelector('#messageBox1')
const messageBox2 = document.querySelector('#messageBox2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log(location)

    messageBox1.textContent = 'Loading...'
    messageBox2.textContent = ''

    if (location) {
        fetch('http://localhost:3000/weather?location=' + location).then((response) => {

            response.json().then((data) => {
                if (data.error) {
                    messageBox1.textContent = data.error
                    messageBox2.textContent = ''
                }
                else {
   
                    messageBox1.textContent = data.location
                    messageBox2.textContent = data.forecast

                }

            }
            )
        })
    }


})