import { useEffect } from "react";
import { useState } from "react";

export default function Joker() { 
    let [joke,setJoke] = useState({});
    let URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        setJoke({setup: jsonResponse.setup , punchline: jsonResponse.punchline });
    }

    useEffect(() => {
        async function getFirstJoke() {
            let respose = await fetch(URL);
            let jsonResponse = await respose.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup , punchline: jsonResponse.punchline });
        }
        getFirstJoke();
    }, [])
    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New joke</button>
        </div>
    );
}
