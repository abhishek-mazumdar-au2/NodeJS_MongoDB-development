require('../src/db/mongoose');
const Task = require('../src/models/task');

// delete task by ID and cout all the remaining tasks.
const findAndDeleteTask = async (id) => {
      await Task.findByIdAndDelete(id);
     const count = await Task.countDocuments();
     return count
}

findAndDeleteTask('5ddd859da2d89026b2325c1b').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
