require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate({ _id: "5dde2735860f7a1d97d07bed" }, { age: 20 }).then((user) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age });
    return count
}

updateAgeAndCount("5dde2735860f7a1d97d07bee", 100).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
});

// 