const mongoose = require('mongoose');
const validator = require('validator');


//.......User Model.......
const User = mongoose.model('User', {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, validate(email){
        if(!validator.isEmail(email)){
            throw new Error("Not a valid email.");
        }
    }},
    age: { type: Number, default: 0, validate(age){
        if(age<0){
            throw new Error("Age needs to be positive.")
        }
    }},
    password: { type: String, trim: true, minlength: 7, required: true }
})

module.exports = User