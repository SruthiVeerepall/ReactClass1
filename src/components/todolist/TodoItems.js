import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";

const TodoItems = ({todos, handleDelete}) =>{
    return(
        todos.map((task,index)=>(
        <ListItem key={index}>
            <Checkbox>

            </Checkbox>
            <ListItemText primary={task.task}/>
            <IconButton onClick={()=>handleDelete(task.id)}>
                <Delete />
            </IconButton>
        </ListItem>
        )));
}

export default TodoItems;