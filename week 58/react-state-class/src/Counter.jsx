import { useState } from "react"

export default function Counter() {
    // let [stateVariable,setStateVariable] = useState(0);
    let [count,setCount] = useState(0);

    function intCount() {
        setCount(count+1);
        console.log(count);
    }

    return (
        <div>
            <h3>Count = {count}</h3> 
            <button onClick={intCount}>Increase Count</button>
        </div>
    )
}