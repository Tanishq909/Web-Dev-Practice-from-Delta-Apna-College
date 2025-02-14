import { useState } from "react"

export default function Form() {
    let [fullName,setFullName] = useState("");
    let [username,setUsername] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    let handleUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter full name" type="text" value={fullName} onChange={handleNameChange} id="fullName"/>
            <button>Submit</button>
            
            <br /><br />

            <label htmlFor="username">Username</label>
            <input placeholder="enter username" type="text" value={username} onChange={handleUsername} id="username"/>
            <button>Submit</button>
        </div>
    )
}