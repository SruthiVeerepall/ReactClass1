import { Button, TextField } from "@mui/material";
import { useState } from "react"


const ToDoList=({addTodos})=>{
    const [task,setTask]=useState('');
    const handleChange=(e)=>{
        setTask(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.trim())
            {
                addTodos(task);
            }
        setTask('');
    }
    return(
        <form onSubmit={handleSubmit}>
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
export default ToDoList;