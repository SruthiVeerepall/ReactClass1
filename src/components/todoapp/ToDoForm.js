import { Button, TextField } from "@mui/material";
import { useState } from "react";


const ToDoForm=({addToDo})=>
{
    const [task,setTask]=useState('');
    const handleChange=(e)=>
        {
            setTask(e.target.value);
        }
        
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.trim())
        {
            addToDo(task);
        }
        setTask('');
        }
    return(
        <form onSubmit={handleSubmit} 
        style={{display:'flex' ,justifyContent:'center', marginBottom:'20px'}}>
            <TextField
                label="New Task"
                variant="outlined"
                style={{marginRight:'20px'}}
                onChange={handleChange}
                value={task}
            />
            <Button type="submit"  variant="contained" color="primary">Add</Button>

        </form>
    );
}
export default ToDoForm;