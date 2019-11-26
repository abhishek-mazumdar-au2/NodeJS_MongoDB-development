const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true }, { useCreateIndex: true })

// Define the model
// const user = mongoose.model('User', {
//     name: { type: String } ,
//     age: { type: Number }
// }) //mongoose.model accepts two arguments(arg1='User', arg2={Schema})

// const user_David = new user({
//     name: 'David',
//     age: 34
// }) // here we created an instance of the Schema

// user_David.save().then((doc) => {
//     console.log(doc);
// }).catch((err) => {
//     console.log(err);
// }) 

// create a new model for tests
const task = mongoose.model('Task', {
    description: { type: String },
    completed: { type: Boolean }
})

// create a new instance
const buy_grocery = new task({
    description: "Buy some veggies and fruits.",
    completed: false
})

// save your work
buy_grocery.save().then((task) => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})
// testing your work