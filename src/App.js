import logo from './logo.svg';
import './App.css';

import { Container, LinearProgress, Paper, Typography } from '@mui/material';
// import TodoList from './components/todolist/TodoList';
// import { useState } from 'react';
// import TodoItems from './components/todolist/TodoItems';
import TransformManager from './components/usereducer/TransformManager';
import Timer from './components/useeffect/Timer';


function App() {
   return(
    <Container maxWidth="sm">
        <Timer />

      </Container>
  );
}

export default App;