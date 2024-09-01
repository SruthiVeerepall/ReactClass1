import { useReducer, useState } from "react";
import reducerfunction,{ADD_TASK, REMOVE_TASK} from "./reducerfunction";
import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import { CloseFullscreen, Delete, FormatStrikethrough, FormatStrikethroughSharp, StrikethroughSOutlined } from "@mui/icons-material";

const TransformManager=()=>{
    const [task,setTask] = useState('');
    const [state,dispatch] = useReducer(reducerfunction);
    const handleOnChange=(e)=>{
        setTask(e.target.value);
    }
    const handleAdd=(e)=>{
        dispatch(
            {type:ADD_TASK, payload: task}
        )
        setTask('');
    }
    console.log("state:", state);
    const generateList=()=>{
        return(
            state.taskList.map((task,index)=>
                <ListItem key={index}>
                    <Checkbox color="secondary"  checkedIcon={<FormatStrikethroughSharp />} >
                    </Checkbox>
                    <ListItemText primary={task} />
                    <IconButton onClick={()=>handleDelete(task)}>
                        <Delete />
                    </IconButton>
                </ListItem>)
        );
    }
    const handleDelete=(task)=>{
        dispatch(
            {type: REMOVE_TASK, payload:task}
        )
    }
    return(
        <div>
           <input 
            type="text" 
            placeholder="Enter Task" 
            value={task} 
            onChange={handleOnChange} />
           <button onClick={handleAdd}>Add</button>
           <ul>{state && generateList()}</ul>
        </div>
        
    )
}

export default TransformManager;