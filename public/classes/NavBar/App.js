import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NavBar from './components/pages/NavBar';
import { Container, LinearProgress } from '@mui/material';




function App() {

  return (
    <Container maxWidth="50px">
      <NavBar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* <Link to='/'>Home</Link>
      <Link to='about'>About</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Container>
  );
}

export default App;