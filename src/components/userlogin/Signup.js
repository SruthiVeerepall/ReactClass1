import { useState } from "react"
import axios from "axios";

const Signup=()=>{
    const [email,setEmial]= useState('');
    const [password,setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleChangeEmail=(e)=>{
        setEmial(e.target.value);
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/signup', {email , password});
            setMessage(response.data.message);
            console.log("Signup: ", response.data.message);
        }
        catch(error)
        {
            console.log("error: " ,error.message);
        }
        
    }
    return(
        <div>
            <h2> Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChangeEmail}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Signup;