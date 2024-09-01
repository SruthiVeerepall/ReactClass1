import { Button, TextField } from "@mui/material";
import { useState } from "react"

const Addition=()=>{
    const [first,setFirst]=useState();
    const [second,setSecond]=useState();
    const [add,setAdd]=useState();
    const handleFirstnumber=(e)=>{
        setFirst(e.target.value);
    }
    
    const handleSecondnumber=(e)=>{
        setSecond(e.target.value);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setAdd(parseInt(first)+parseInt(second));
        setFirst();
        setSecond();
    }
return(
    <form onSubmit={handleSubmit}>
        <TextField
                label="Firstnumber"
                variant="outlined"
                style={{marginRight:'20px'}}
                onChange={handleFirstnumber}
                type="number"
                value={first}
            />
        <TextField
                label="Secondnumber"
                variant="outlined"
                style={{marginRight:'20px'}}
                onChange={handleSecondnumber}
                type="number"
                value={second}
            /><br />
        <Button type="submit"  variant="contained" color="primary">Addition</Button>
        <h2>{add}</h2>
    </form>
);
}

export default Addition;