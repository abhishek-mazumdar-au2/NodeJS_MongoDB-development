const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', 
{ useNewUrlParser: true }, 
{ useCreateIndex: true },
{ useUnifiedTopology: true })

//                                      .......Define the model.......

// const user = mongoose.model('User', {
//     name: { type: String, required: true, trim: true } ,
//     age: { type: Number, default: 0 },
//     email: { type: String, required: true, trim: true, lowercase: true, validate(val){  // .....using validatorJS.....
//         if(!validator.isEmail(val)){
//             throw new Error("Email is invalid")
//         }
//     } },
//     password: { type: String, required: true, trim: true, minLength: 6, validate(pass){
//         // if(pass.length<6){
//         //     throw new Error("Password should be atleast 6 characters length.")
//         // } 
        
//         if(pass.includes('password')){
//             throw new Error("Your password cannot contain the word 'password'.")
//         }
//     } }
// }) //mongoose.model accepts two arguments(arg1='User', arg2={Schema})

// const user_David = new user({
//     name: 'David',
//     age: 34,
//     email: "david@gill.com",
//     password: "#Kasod"
// }) // here we created an instance of the Schema

// user_David.save().then((doc) => {
//     console.log(doc);
// }).catch((err) => {
//     console.log(err);
// }) 
// const user_Hrishav = new user({
//     name: 'Hrishav',
//     email: "hrishav@chakraborty.com",
//     password: "23passwrdssd"
// }) // here we created an instance of the Schema

// user_Hrishav.save().then((doc) => {
//     console.log(doc);
// }).catch((err) => {
//     console.log(err);
// }) 
//                                  .......create a new model for tests.......

// const task = mongoose.model('Task', {
//     description: { type: String, required: true, trim: true },
//     completed: { type: Boolean, default: false, } 
// })

//   //                                    .......create a new instance.......

// const buy_grocery = new task({
//     description: "Buy some veggies and fruits.",
// })
// const car_wash = new task({
//     description: "wash the car",
//     completed:  true
// })
//     //                                    ........save your work........

// buy_grocery.save().then((task) => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// })

// car_wash.save().then((task) => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// })
// //testing your work

