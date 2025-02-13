//Promises to prevent from callback hell
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
    }
    else {
        reject("failure : weak connection. data not saved ");
    }
  });
}

console.log(savetoDb("apna college"));
