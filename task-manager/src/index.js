const express = require('express');
const port = process.env.PORT || 8000;

const User = require('./models/user');
const Task = require('./models/task')

// .......Mongooose SetupConnect.......
require('./db/mongoose');
//  ........app Setup.......
const app = express();
app.use(express.json())
app.get('', (req, res) => {
    res.send({
        message: "Keep God first!"
    })
})
//                                     .......Get all users.......
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.send(e)
    })
})
//                                      .......Create New User.......
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201)
        res.send(user)
    }).catch((e) => {
        res.status(400);
        res.send(e)
    })
})
//                                       .......Get User By ID.......
app.get('/users/:id', (req, res) => {
    User.findOne({ _id: req.params.id }).then((user) => {
        res.status(200).send(user)
    }).catch(() => {
        res.status(404).send({mesg: "No such user!"})
    })
})
//                                        .......Get all tasks.......
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch(e => {
        res.send(e)
    })
})
//                                       ........Create New task.......
app.post('/task', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201)
        res.send(task)
    }).catch((e) => {
        res.status(400);
        res.send(e)
    })
})
//                                         .......Get Task By ID.......
app.get('/tasks/:id', (req, res) => {
    Task.findById({ _id: req.params.id }).then((task) => {
        res.status(200).send(task).catch((e) => {
            res.status(404).send("No task found!")
        })
    })
})
app.listen(port, () => {
    console.log(`server running at locahost:${port}`);
});