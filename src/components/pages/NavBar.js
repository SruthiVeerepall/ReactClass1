import { Container , Typography, Paper, ListItem, Checkbox, ListItemText, IconButton, AppBar, Toolbar} from '@mui/material';
import { TfiMenu } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavBar=()=>{
    return(
        <AppBar position='static'>
        <Toolbar edge="start" color="inherit"> 
        <IconButton>
          <TfiMenu />
        </IconButton>
        <Typography variant='h6' style={{flexGrow:1}}>
            Wlcome to Application
        </Typography>
        <Link to="/" style={{color:'white' , marginRight:'1rem'}}><CiHome /></Link>
        <Link to="/about" style={{color:'white' , marginRight:'1rem'}}><MdOutlineRoundaboutLeft /></Link>
        <Link to="/contact" style={{color:'white' , marginRight:'1rem'}}><MdContacts /></Link>
        </Toolbar> 
      </AppBar>
    );
}

export default NavBar;