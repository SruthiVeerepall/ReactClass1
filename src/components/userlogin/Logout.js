import axios from "axios";
import { useState } from "react";

const Logout=()=>{
    const [message,setMessage]= useState('');
    const handleLogout=()=>{
        try{
            const response= axios.post('http://localhost:5000/logout');
            setMessage(response.data.message);
        }
        catch(error)
        {
            console.log("error:" , error.message);
        }
    }
    return(
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
            <p>{message}</p>
        </div>
    );
}

export default Logout;