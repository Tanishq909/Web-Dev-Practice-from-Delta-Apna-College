let url = "https://catfact.ninja/fact";

fetch(url)  //It will get Promise object pending
   .then((response) => {
    console.log(response)
    return response.json()
    })
    .then((data) => {
        console.log("data1 = ",data.fact)
        return fetch(url);
    })
    .then((res) => {
        return res.json()
    })
    .then((data2) => {
        console.log("data2 = ",data2.fact);
    })
   .catch((error)=> {
    console.log("Error - ",error)
   })

console.log("i am sad");