import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import { Container , Typography, Paper} from '@mui/material';
import ToDoForm from './components/todoapp/ToDoForm';
import ToDoList from './components/todoapp/ToDoList';

function App() {

//   const [counter,setCounter]=useState(0);
// const initialCount=5; 

// const getCount=(count)=>{
//   console.log(count);
//   setCounter(count);}
const [todos,setTodos]=useState([]);
const addToDo=(task)=>
{
  setTodos([
    ...todos,
    {id:Date.now() ,task:task , completed:false},
  ])
  console.log(todos);
}

const taggleComplete=(id)=>{
  setTodos(
    todos.map(todo=>(
      todo.id===id ? {...todo,completed:!todo.completed} : todo
    ))
  )

}
const removeTodo=(id)=>{
  setTodos(
    todos.filter(todo=>(todo.id!==id)));
}
  return (
    <div>
      {/* <Child />
      <ChildFunctional />
      <Methods /> */}
      {/* <h2>Count in Parent:{counter}</h2>
      <Form  initialCount={initialCount} getCount={getCount}/>
      <FormClass initialCount={initialCount} getCount={getCount}/> */}
      {/* <h2>Welcome to App</h2>
      <UserForm />
      <FeedbackForm />
      <ProductForm /> */}

      <Container maxWidth="sm">
        <Typography variant='hd' align='center' gutterBottom>My Do List</Typography>
        <Paper style={{padding:'20px'}}>
          <ToDoForm  addToDo={addToDo}/>
          <ToDoList   todos={todos} taggleComplete={taggleComplete} removeTodo={removeTodo} />
        </Paper>

      </Container>

    </div> 
  );
}

export default App;