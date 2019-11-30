const express = require('express');
const userRouter = require('./routes/user');  // require the routes ---> initialise them app.use(routeName)
const taskRouter = require('./routes/task');
const port = process.env.PORT || 8000;

const User = require('./models/user');
const Task = require('./models/task')

 //                                       .......Mongooose SetupConnect.......
require('./db/mongoose');
//  ........app Setup.......
const app = express();
app.use(express.json());
app.get('', async (req, res) => {
    res.send({
        message: "Keep God first!"
    })
})

//                                                .......setting up router.......
// const router = new express.Router();
// router.get('/test', (req, res) => {
//     res.send("HelloWorld")
// })
// app.use(router)
//                                          .......Initialise the routers.......
app.use(userRouter);
app.use(taskRouter);
// routes 1 - 5 in routes/user.js
// routes 6 - 10 in routes/task.js
//                                            .......Hashing password.......
const bcrypt = require('bcryptjs');
hashPassword = async(password) => {
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch);
}
hashPassword("#Kasol2sar")
app.listen(port, () => {
    console.log(`server running at locahost:${port}`);
});