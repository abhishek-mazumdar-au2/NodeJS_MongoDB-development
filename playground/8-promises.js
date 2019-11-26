const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3, 2])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result)
}).catch((error) => {
    console.log('Error!', error);
})