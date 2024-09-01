import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import { Container , Typography, Paper, ListItem, Checkbox, ListItemText, IconButton} from '@mui/material';
import CartForm from './components/shoppingcart/CartForm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';





function App() {

  //const [cartItems,setCartItem]=useState(["Phones","Electronics","Laptops","Camers","Utenciles","Clothes"])
  const [addItems,setaddItems]=useState([])
  const [cartItems,setCartItem]=useState(
    {
      item1: {name:'Phones', price:'$1000'},
      item2: {name: 'Electronics', price:'$50'},
      item3: {name: 'Laptops',price:'$1500'},
      intem4:{name: 'Cameras',price:'$500'},
      items5: {name:'Utencels' , price: '$100'},
      item6: {name: 'Cloths', price: '$100'},
    }
  )

  const handleCartItem=(item)=>{
    //console.log(item.name);
    setaddItems(
      [
        ...addItems,
        {name:item.name,price:item.price}
      ]);
    console.log(addItems);
  }
  const cartDisplay=()=>{
    return (
      <div>
        {Object.keys(cartItems).map((key)=>{
          const item =cartItems[key];
          return (
            // <li key={key}>
            //   <strong>{item.name}</strong>: {item.price}
            // </li>
          <ListItem key={key}>
            <Checkbox>

            </Checkbox>
            <ListItemText value={item.name}>
               {item.name}
            </ListItemText>
            <IconButton onClick={()=>{handleCartItem(item)}}>
              <AddShoppingCartIcon />
            </IconButton>
          </ListItem>
          );
        })}
      </div>

    );
    // return cartItems.map((item,index)=>(
    //   <ListItem key={index}>
    //        <Checkbox>

    //        </Checkbox>
    //        <ListItemText>
    //           {item.name}
    //        </ListItemText>
    //        <IconButton>
    //          <AddShoppingCartIcon />
    //        </IconButton>
    //    </ListItem>
    // ));
  }
  return (
    <Container maxWidth="50px">
      <Typography variant='hd' align='center' gutterBottom>
        <Paper style={{padding:"20px"}}>
          <CartForm />
          {cartDisplay()}
        </Paper>
      </Typography>
      
    </Container>
  );
}

export default App;