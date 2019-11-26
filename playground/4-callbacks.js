// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, "AB is learning to program.")
//     }, 2000)
// }

// doWorkCallback((error, result) => {
//     if(error){
//         return console.log(error);
//     } console.log(result);
// })

const subtract = (a, b, callback) => {
    setTimeout(() => {
        console.log(a-b);
    }, 4000)
}

subtract(45, 5, ((error, result) => {
    if(error){
        console.log(error);
    }console.log(result);
}))

const arith = (m, n, o, callback) => {
    setTimeout(() => {
            // console.log(m+n-o);
            callback(null, m+n-o)
    }, 8000)
}
arith(30,5,9, (error, final) => {
    if(error)return console.log(error);
    console.log(final);
})