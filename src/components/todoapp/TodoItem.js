import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import {Delete} from "@mui/icons-material"

const TodoItem=({task, taggleComplete, removeTodo})=>{
    
    return(
        <ListItem>
            <Checkbox
            checked={task.completed}
            onClick={()=>taggleComplete(task.id)}
            />
            <ListItemText 
            primary={task.task}
            />
            <IconButton onClick={()=>removeTodo(task.id)}>
                <Delete />
            </IconButton>
        </ListItem>
    );
}
export default TodoItem;