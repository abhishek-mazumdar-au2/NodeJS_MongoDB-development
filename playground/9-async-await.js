const add = (m, n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(m < 0 || n < 0){
                return reject ("Number must be +ive")
            }
            resolve(m + n)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 3)
    const sum2 = await add(-1, 3)
    return sum
}

doWork().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log('e',e)
})

