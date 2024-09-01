import logo from './logo.svg';
import './App.css';

import React,{useRef, useState} from 'react';
import { Container, LinearProgress } from '@mui/material';
import FocusManager from'./components/references/functionalcomponent/FocusManager';
import FancyButton from './components/references/forwardref/FancyButton';



function App() {
  // const buttenRef=useRef(null);
  // const handleClick=()=>{
  //   buttenRef.current.focus();
  // }

  return (
    <Container maxWidth="50px">
      {/* <FocusManager /> 
      <FancyButton ref={buttenRef} name="Ram">ClickMe</FancyButton>
     <button onClick={handleClick} >Focus Famcy Button</button> */}


    </Container>
  );
}

export default App;