const geocode = (address, callback) => {

    setTimeout(() => {
        const data = { latitude: 0, longitude: 0 }
        callback(data)
    },2000)


}


const add = (a, b, callback) => {

    setTimeout(() => {
        const data = a + b

        callback(data)
    },200)
}


add(3, 4, (data) => {
    console.log(data)
})




geocode('phidelphia', (data) => {
    console.log(data)
})
