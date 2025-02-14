import { useState } from "react"

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function Counter1() {
    // let [stateVariable,setStateVariable] = useState(0);
    let [count,setCount] = useState(init); //initialization
    // console.log("Component is rendered");
    // console.log(`count = ${count}`);

    function incCount() {
        // setCount(count + 2);
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
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