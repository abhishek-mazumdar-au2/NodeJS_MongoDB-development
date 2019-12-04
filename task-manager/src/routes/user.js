const express= require('express');
const router = express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken');

// 1                                                .......Get all users.......
router.get('/users', async (req, res) => {
    try{
       await User.find({}).then((users) => {
       res.send(users)
        })
    }catch(e){
        res.status(500).send(e)
    }
})
// 2                                                .......login route.......
router.post('/users/login', async(req, res) => {
    try {
        const { email, password } = req.body;
       const user =  await User.findByCredentials(email, password)
       const token  = await user.generateAuthToken(); // this creates the token
       res.status(200).send( { user, token } )
    } catch (e) {
        res.status(400).send(e)
    }
})
// 3                                               .......Create New User.......
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save().then(() => {
            res.status(201)
            res.send(user)
        })
    }catch(e){
        res.status(400).send(e)
    }
})
// 4                                              .......Get User By ID.......
router.get('/users/:id', async (req, res) => {
   try {
    const theUser = await User.findOne({ _id: req.params.id })
       res.status(200).send(theUser)
   } catch (e) {
       res.status(401).send(e)
   }
})
// 5                                ........Get User by ID and Edit and save.......
router.patch('/users/:id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "age", "password"];
    const validUpdation = updates.every((update) => {
        allowedUpdates.includes(update)
    })
    console.log(validUpdation)
    if(validUpdation){
       return res.status(400).send("Bad Request")
    }
    try {
        const user = await User.findById(req.params.id);
        
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        
        await user.save();
        // const theUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if(!user){
            return res.status(404).send('User Not Found!')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

                       //          .......Get User By Id And Update (AndrewMead).......
// app.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
// 6                                         .......delete Usery By ID.......
router.delete('/users/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
          return res.status(400).send("No user to be deleted.")
        }
        res.send(user)   
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router;