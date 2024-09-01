import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, List, ListItem, ListItemText } from "@mui/material";

const ToDoDisplay=({todos, handleDelete })=>{
    const genetateList=()=>{
       return todos.map((task,index)=>(
        <ListItem key={index}>
            <Checkbox color="secondary">

            </Checkbox>
            <ListItemText primary={task} />

            <IconButton onClick={()=>handleDelete(task)}>
                <Delete />
            </IconButton>
        </ListItem>
       ));
    }
    return(
        <div> Todo List
            {genetateList()}
        </div>
    );
}

export default ToDoDisplay;