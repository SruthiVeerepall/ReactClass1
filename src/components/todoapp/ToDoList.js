

import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const ToDoList=({todos, taggleComplete, removeTodo})=>
{
    const generateTasks=()=>
    {
        return todos.map(((task,index)=>(
            <TodoItem key={index} task={task} taggleComplete={taggleComplete} removeTodo={removeTodo}/>
        )));
    }
    return(
        <List>
            {generateTasks()}
        </List>
    );
}
export default ToDoList;