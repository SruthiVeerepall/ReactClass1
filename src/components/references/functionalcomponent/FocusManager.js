import { useRef } from "react";

const FocusManager =()=>{
    const refName=useRef(null);
    const refEmail=useRef(null);
    const refPassword=useRef(null);
    const handleInput =(inputRef ) =>{
        inputRef.current.focus();
    }
    return(
        <div>
                <input
                    ref={refName}
                    type="text"
                    placeholder="Enter Name" />

                <button onClick={()=>handleInput(refName)}>Name Focus</button><br/>
                <input
                    ref={refEmail}
                    type="email"
                    placeholder="Enter Email" />
                <button onClick={()=>handleInput(refEmail)}>Email Focus</button><br/>
                <input
                    ref={refPassword}
                    type="password"
                    placeholder="Enter Password" />
                <button onClick={()=>handleInput(refPassword)}>Password Focus</button><br/>
            </div>
    );
}

export default FocusManager;