const express = require('express');
const userRouter = require('./routes/user');  // require the routes ---> initialise them app.use(routeName)
const taskRouter = require('./routes/task');
const port = process.env.PORT || 8000;

const User = require('./models/user');
const Task = require('./models/task')

 //                                       .......Mongooose SetupConnect.......

require('./db/mongoose');
//                                             ........app Setup.......
const app = express();

//                                    .......Middleware for route handling........
app.use((req, res, next) => {
    if(req.method === 'GET' || req.method === 'POST'){
        res.send("site is under maintainance. Please try soon.")
    }else{
        next();
    }                  // as authenticating tokens and etc.
})

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
// const bcrypt = require('bcryptjs');
// hashPassword = async(password) => {
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare(password, hashedPassword)
//     console.log(isMatch);
// }
// hashPassword("#Kasol2sar")

//                                   .......require JWT.......
const jwt = require('jsonwebtoken');
// jwt.sign({ anObject }, string) will return us the token which will be the token for authentication
myFunction = async() => {
    const token = jwt.sign({ _id: 'dummyId' }, 'shhh');
    console.log(token);

    //                                  .......jwt Verify.......
    const data = jwt.verify(token, 'shhh', { expiresIn: '5 seconds' });
    console.log(data);
}
myFunction();
app.listen(port, () => {
    console.log(`server running at locahost:${port}`);
});

//                                       ...way to hash password...

// 1. model --> make the schema --> schema.pre(){middleware}
// 2. routes --> already create works
// 3. findByIdAndUpdate routes
// 4. schema add hash function