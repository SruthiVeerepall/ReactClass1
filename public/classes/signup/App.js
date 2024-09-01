import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import { Container , Typography, Paper, ListItem, Checkbox, ListItemText, IconButton} from '@mui/material';
import CartForm from './components/shoppingcart/CartForm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Login from './components/userlogin/Login';
import Signup from './components/userlogin/Signup';
import Logout from './components/userlogin/Logout';





function App() {

  return (
    <Container maxWidth="50px">
      <Typography variant='hd' align='center' gutterBottom>
        <Signup />
        <Login />
        <Logout />
      </Typography>
      
    </Container>
  );
}

export default App;