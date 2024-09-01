import { useEffect, useState } from "react";

const Timer = () =>{
    const [time,setTime] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(()=>{
        setCalculation(()=>time*2);
    },[time]);
    return(
        <div>
        <button onClick={()=>setTime((c)=>c+1)}>Add</button>
        <h2>Calculation:{calculation}</h2>
        </div>
    );
}

export default Timer;