const express = require('express');
const port = process.env.PORT || 8000;

const User = require('./models/user');
const Task = require('./models/task')

// .......Mongooose SetupConnect.......
require('./db/mongoose');
//  ........app Setup.......
const app = express();
app.use(express.json())
app.get('', async (req, res) => {
    res.send({
        message: "Keep God first!"
    })
})
//                                     .......Get all users.......
app.get('/users', async (req, res) => {
    try{
       await User.find({}).then((users) => {
       res.send(users)
        })
    }catch(e){
        res.status(500).send(e)
    }
})
//                                      .......Create New User.......
app.post('/users', async (req, res) => {
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
//                                       .......Get User By ID.......
app.get('/users/:id', async (req, res) => {
   try {
    const theUser = await User.findOne({ _id: req.params.id })
       res.status(200).send(theUser)
   } catch (e) {
       res.status(401).send(e)
   }
})
//                                        .......Get all tasks.......
app.get('/tasks', async (req, res) => {
    try {
        Task.find({}).then((result) => {
            res.status(400).send(result)
        })
        }catch(e) {
            res.send(e)     
    }
})
//                                       ........Create New task.......
app.post('/task', async(req, res) => {
    const task = new Task(req.body)
    try {
       await task.save().then((task) => {
            res.status(201)
            res.send(task)
        })
    } catch (e) {
        res.status(400);
        res.send(e) 
    }
})
//                                         .......Get Task By ID.......
app.get('/tasks/:id', async (req, res) => {
    try {
       await Task.findById({ _id: req.params.id }).then((task) => {
           res.status(200).send(task);
       })
    } catch (e) {
        res.status(401).send(e)
    }
})
app.listen(port, () => {
    console.log(`server running at locahost:${port}`);
});