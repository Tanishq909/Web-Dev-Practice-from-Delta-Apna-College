import { useState } from "react"

export default function Counter() {
    // let [stateVariable,setStateVariable] = useState(0);
    let [count,setCount] = useState(0); //initialization
    // console.log("Component is rendered");
    // console.log(`count = ${count}`);

    function incCount() {
        // setCount(count + 2);
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount(25);
        // console.log(`inside incCount,count = ${count}`);
    }

    return (
        <div>
            <h3>Count = {count}</h3> 
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}