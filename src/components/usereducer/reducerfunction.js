export const ADD_TASK="ADD_TASK";
export const REMOVE_TASK="REMOVE_TASK";
const initialState={
    taskList: []
}
const reducerfunction=(state=initialState,action)=>{
    console.log("reducer:", action);
    const newState= { ...state };
    switch(action.type) {
        case ADD_TASK:
            newState.taskList=[...newState.taskList, action.payload];
             return newState;
        case REMOVE_TASK :
            newState.taskList=newState.taskList.filter((tasks)=>tasks!==action.payload);
            return newState;
            default: 
                return newState;
    }
   
}

export default reducerfunction;