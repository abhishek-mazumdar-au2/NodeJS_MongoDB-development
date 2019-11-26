// CRUD operations
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to the database.');
    }
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Om',
    //     age: 18
    // }, (error, result) => {
    //     if(error){
    //         return console.log('unable to insert document.')
    //     }
    //     console.log(result.ops);
    // })


// db.collection('users').insertMany([
//     {
//         name: 'Jenny',
//         age: 43
//     },
//     {
//         name: 'Justin',
//         age: 32
//     }
// ], (error, result) => {
//     if(error){
//         return console.log(error);
//     }
//     console.log(result.ops)
//    })

// db.collection('tasks').insertMany([
//     {
//         description: "make the bed",
//         status: true
//     },
//     {
//         description: "drop the garbage",
//         status: false
//     },{
//         description: "make tea",
//         status: false
//     }
// ], (error, result) => {
//     if(error){
//         return console.log(error);
//     }
//     console.log(result.ops)
// })
// db.collection('tasks').
//     find({ status: false }).
//        toArray((error, tasks)=> {
//     if(error){
//         return console.log(error);
//     }console.log(tasks)
// })
db.collection('tasks').
    findOne({ _id: ObjectID("5ddc30df0d30fd544d259ca7")}, (error, task) => {
        if(error) return console.log(error);
        console.log(task);
    })
         
    db.collection('users').
       find({ age: {$lt: 24} }).
           toArray((error, array) => {
               console.log(array);
           })
})