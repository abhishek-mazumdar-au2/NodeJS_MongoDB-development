const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// 6                                       .......Get all tasks.......
router.get('/tasks', async (req, res) => {
    try {
        Task.find({}).then((result) => {
            res.status(200).send(result)
        })
        }catch(e) {
            res.send(e)     
    }
})
// 7                                      ........Create New task.......
router.post('/task', async(req, res) => {
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
// 8                                        .......Get Task By ID.......
router.get('/tasks/:id', async (req, res) => {
    try {
       await Task.findById({ _id: req.params.id }).then((task) => {
           res.status(200).send(task);
       })
    } catch (e) {
        res.status(401).send(e)
    }
})
// 9                                    ........Get Task By ID and Update.......
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["dascription", "completed"];
    const isValidOperation = updates.every((update) => {
        allowedUpdates.includes(update)
    })
    if(isValidOperation){
        return res.status(400).send("Bad-Request!")
    }
    try {
        const theTask = await Task.findById(req.params.id);
        updates.forEach((update) => {
            theTask[update] = req.body[update]
        })
        await theTask.save();
        // const theTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true });
        if(!theTask){
            res.status(400).send("Not found.")
        }
        res.status(200).send(theTask)
    } catch (error) {
        res.status(400).send(error)
    }
})
// 10                                        .......Delete Task By Id.......
router.delete('/task/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(400).send(task);
        }
        res.send(task).status(200)
    } catch (error) {
        res.send(error)
    }
   

})

module.exports = router;