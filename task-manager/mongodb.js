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
    //                                 .......CREATING Documents.......
    // db.collection('users').insertOne({
    //     name: 'Abhishek',
    //     age: 24
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
//                                        .......READING DOcuments.......
// db.collection('tasks').
//     find({ status: false }).
//        toArray((error, tasks)=> {
//     if(error){
//         return console.log(error);
//     }console.log(tasks)
// })
// db.collection('tasks').
//     findOne({ _id: ObjectID("5ddc30df0d30fd544d259ca7")}, (error, task) => {
//         if(error) return console.log(error);
//         console.log(task);
//     })
         
//     db.collection('users').
//        find({ age: {$lt: 24} }).
//            toArray((error, array) => {
//                console.log(array);
//            })

//                                        .......UPDATING documents......

// const updateDocument = db.collection('users').updateOne(   // updateOne must be given these 2 arguments
//     { _id: ObjectID("5ddc2aa68e73b0501ead8eb3")},     // 1. the ssearch criteria
//     {$set: { name: 'JustinTimberlake' }}              // 2. the update criteria
// )

// updateDocument.then((result) => {                          // updateOne returns a promise 
//     console.log(result.result);
// }).catch((error) => {
//     console.log(error);
// });
//                                        ......using $inc......
// { $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }
// const incrementDocument = db.collection('users').updateOne(
//     {_id: ObjectID("5ddc2aa68e73b0501ead8eb3")},
//     { $inc: {age: 5}}
// )

// incrementDocument.then((result) => {
//     console.log(result.result);
// }).catch((error) => {
//     console.log(error);
// })
//                                     .......updateMany().......
// const updateManyDocs = db.collection('tasks').updateMany(
//     { "description" : "drop the garbage" },
//     { $set: { status: false } }
// )

// updateManyDocs.then((result) => {
//     console.log(result.result);
// }).catch((error) => {
//     console.log(error);
// })
//                                 .......DELETING Documents.......

const deletingDocs = db.collection('users').deleteMany({
    name: "Abhishek"
})

deletingDocs.then((result) => {
    console.log(result.result);
}).catch((error) => {
    console.log(error);
})

})  // Do NOT delete or comment out these parentheses or brackets