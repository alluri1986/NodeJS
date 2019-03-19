const name = 'Pratap'
const userAge = 27


const user = {
    name: name,
    age: userAge,
    location:'Philadelphia'

}


console.log(user)


// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 301,
    salePrice: undefined
}

//const lable = product.name
//const price = product.price



const {label:productLabel, price ,rating = 5} = product

console.log(productLabel)
console.log(price)
console.log(rating)


