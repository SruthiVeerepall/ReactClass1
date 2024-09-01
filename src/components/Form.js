import { useState } from "react";

function Form(props)
{
    const initCount=props.initialCount;
    const[count,setCount]=useState(initCount);
    const handleIncrease=()=>{
        setCount(count+1);
    }
    const handleDecrease=()=>
    {
        setCount(count-1);
    }
    const handleUpdate=()=>{
        props.getCount(count);
    }
    return(
        <div>
            <h2>Count: {count}</h2>
            <button name="Submit" onClick={handleIncrease}>Increase</button>
            <button name="decrease" onClick={handleDecrease}>Decrease</button>
            <button name="update" onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default Form;