import { useState } from "react";


function ChildFunctional()
{
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const handleChange=(e)=>
    {
        console.log(e.target.value);
        setFname(e.target.value);
    }
    const changeLname=(e)=>
    {
        console.log(e.target.value);
        setLname(e.target.value);
    }
    const submitChange=(e)=>
    {
        e.preventDefault();
        console.log('fname:',fname,'lname:',lname);
    }
    return(
        <div>
            <h2>Welcome to Functional Component</h2>
            <h2>Entered Name: {fname}</h2>
            <input onChange={handleChange} name="fname"></input>
            <input onChange={changeLname} name="lname"></input>
            <button onClick={submitChange} name="submit" >Submit</button>
        </div>
    );
}

export default ChildFunctional;