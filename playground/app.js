//setTimeout(() => {
//    console.log('Two seconds are up')
//}, 2000)


const names = ['Aarna', 'Praveen', 'Praveen'];

    const shortNames = names.filter((name) => {
        return name.length <= 4;
    });

console.log(shortNames)