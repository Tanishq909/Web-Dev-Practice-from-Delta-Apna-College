let url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const head = { headers : { Accept : "application/json"}};
        let res = await axios.get(url,head);
        console.log(res.data);
    }
    catch(error) {
        console.log(error);
    }
}

getJokes()