
import React from 'react'
 

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaPhoneAlt } from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {BiLogIn} from 'react-icons/bi';
import {GrCart} from 'react-icons/gr';
import {FiSearch} from 'react-icons/fi';
import{BiSearch}from 'react-icons/bi';
import {Navbar,NavDropdown,Nav, FormControl,Form,Button} from "react-bootstrap"
 const Header=()=>{

 
      return( 
      
     <div className="container">
        
         <div className="dropdown">
       
       
         <Navbar bg="" expand="lg">
             
         <a className=" dropdown-toggle">USD    </a>
       
       <a className=" dropdown-toggle">ENG    </a>
       <Navbar.Toggle aria-controls="Link" />
  <Navbar.Collapse Link="Link">
        <Nav className="mr-auto">
     
      
      <Nav.Link  className="call" href="#home"> < FaPhoneAlt />CALL : + 01432 896 453</Nav.Link>
      <Nav.Link   className="contact"href="#home">CONTACT US</Nav.Link>
      <Nav.Link  className="mywish" href="#home"><FaHeart /> MYWISHLIST(0)</Nav.Link>
      <Nav.Link  className="about" href="#home">ABOUT</Nav.Link>
      
      <Nav.Link  className="login" href="#home"><BiLogIn/>LOGIN</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
   <hr/>
 

  
 
  
 
 
  <b>
  <Navbar bg="" expand="lg">
  <a href=""> <img  className="navbar-brand logo" src="https://d-themes.com/react/molla/demo-2/assets/images/logo.png"/></a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Shop</Nav.Link>
      <Nav.Link href="#link">Product</Nav.Link>
      <Nav.Link href="#link">Pages</Nav.Link>
      <Nav.Link href="#link">blog</Nav.Link>
      <Nav.Link href="#link">Element</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     
      <Button variant="outline-success">Search<BiSearch/></Button>
    </Form>
  </Navbar.Collapse>

 
  
  
    

   <a href=""><GrCart className="cartimg"/> 
   <button className="cart"> 0</button>
  
   </a>
  
  
   </Navbar>
   
  
  
   </b> 

        
   
     </div> );

   

   
      

 }
 export default Header;