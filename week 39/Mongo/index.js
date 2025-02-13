const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
 
main()
   .then(() => {
    console.log("connection successful");
   })
   .catch(err => console.log(err));

// Using Asynchorous
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number
});

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);

// const user1 = new User({
//   name: "Adam",
//   email:"adam@yahoo.in",
//   age:48,
// });

// user1.save();

// const user2 = new User({
//   name: "Eve",
//   email:"eve@yahoo.in",
//   age:48,
// });

// user2.save()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err)=> {
//       console.log(err);
//     })

// User.insertMany([
//   { name : "Tony", email: "tony@gmail.com", age: 50},
//   { name : "Peter", email: "peter@gmail.com", age: 30},
//   { name : "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//   console.log(res);
// });

// User.findOne({age:{$gt:47}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })


// User.findOne({_id : "66beebcd1ddae07d950e1957"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// User.findById("66beebcd1ddae07d950e1957")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// User.updateOne({name:"Bruce"},{age:49})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// User.updateMany({age : {$gt:48}},{age:55})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// User.findOneAndUpdate({name: "Bruce"},{age:42},{new:true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// User.deleteOne({name:"Bruce"})
//   .then((res) => {
//     console.log(res);
//   })

// User.deleteMany({age:48})
//   .then((res) => {
//     console.log(res);
//   })


