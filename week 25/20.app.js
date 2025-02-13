// function savetoDb(data,success,failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetoDb(
//     "apna college",() => {
//         console.log("success : your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("Success2 : data2 saved");
//                 savetoDb(
//                     "shradha",
//                 () => {
//       console.log(error);              console.log("Success3 : data3 saved");
//                 },
//                 ()=> {
//                     console.log("failure2 : weak connection")
//                 })
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         )
//     },
//     () => {
//         console.log("failure : weak connection. data not saved ")
//     }
// );

function savetoDb(data) {
    return new Promise((resolve,reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
    if(internetSpeed > 4) {
        resolve("success : your data was saved");
    }//Promises to prevent from callback hell
    else {
        reject("failure : weak connection. data not saved ");
    }
  });
}

//Results & Errors
savetoDb("Tanishq")
        .then((result) => {
            console.log("data1 saved.");
            console.log("result of promise :",result);
            return savetoDb("apna college")  
        })
        .then((result) => {
            console.log("data2 saved.")
            console.log("result of promise :",result);
            return savetoDb("Helloworld")
        })
        .then((result) => {
            console.log("data3 saved.")
            console.log("result of promise :",result);
        })
        .catch((error) => {
            console.log("promise was rejected")
            console.log("error of promise :",error);
        })

