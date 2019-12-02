const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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
});

userSchema.pre('save', async function(next){
    const user = this;
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log('just before saving!')
    next();
})
//.......User Model.......
const User = mongoose.model('User', userSchema)

module.exports = User