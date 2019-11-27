require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate({ _id: "5dde2735860f7a1d97d07bed" }, { age: 20 }).then((user) => {
    console.log(user);
    return User.find( { age: { $gte: 20 }} )
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})