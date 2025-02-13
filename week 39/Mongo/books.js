const mongoose = require('mongoose');

main()
   .then(() => {
    console.log("connection successful");
   })
   .catch(err => console.log(err));

// Using Asynchorous
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        maxLength:20
    },
    author: {
        type:String
    },
    price: {
        type:Number,
        min: [1,"Price is too low for Amazon selling"] 
    },
    discount: {
        type:Number,
        default:0
    },
    category: {
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String]
})

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("66c042f04fce09f7a3a1e600",{price:-100},{runValidators:true})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message)
    });

// let book1 = new Book({ 
//     title:"Marvel Comics v2",
//     price:600,
//     genre:["comics","superheroes","fiction"]
// })

// book1.save()
//    .then((res)=>{
//         console.log(res);
//         })
//     .catch((err)=>{
//         console.log(err);
//         })
