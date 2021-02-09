import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; 

import {Navbar,NavDropdown,Nav, FormControl,Form,Button,} from "react-bootstrap"
import {Dropdown} from 'react-bootstrap'
function Sideimg  (){
    return(<div className="container">

        <div className="shoplist">
            <h2>List</h2>
            <h5 className="shoptitle">Shop</h5>

  </div>
<div className="row">
    <div className="col xl-12">
    <Navbar>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Shop</Nav.Link>
      <Nav.Link href="#link">Default</Nav.Link>

      </Nav>
      </Navbar.Collapse>
      </Navbar>
</div>
</div>
<hr/>

 
       




   
   <div className="row">
    <div className="col-md-4">

     <nav>   <div className="welshow"><div>  <p>Filter:</p><p>Showing 0 of Product</p></div></div></nav>
  
<hr/>
  <Dropdown className="dropdowns">
  <Dropdown.Toggle>
   category values

    </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>


    </div>
    <div className="col-md-8">


    </div>

    </div>



    </div>);
}

export default Sideimg;