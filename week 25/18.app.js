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
//                     console.log("Success3 : data3 saved");
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

// let request = savetoDb("apna college");
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
// })

//Compact Form
// savetoDb("tanishq")
//         .then(() => {
//             console.log("promise was resolved");
//             console.log(request);
//     })
//         .catch(() => {
//             console.log("promise was rejected");
//             console.log(request);
//     })

//Promises Chaining
savetoDb("Tanishq")
        .then(() => {
            console.log("data1 saved.");
            savetoDb("apna college")
            .then(() => {
                console.log("data2 saved.")
            })
        })
        .catch(() => {
            console.log("promise was rejected")
        })

//Improved Version
savetoDb("Tanishq")
        .then(() => {
            console.log("data1 saved.");
            return savetoDb("apna college")  
        })
        .then(() => {
            console.log("data2 saved.")
            return savetoDb("Helloworld")
        })
        .then(() => {
            console.log("data3 saved.")
        })
        .catch(() => {
            console.log("promise was rejected")
        })