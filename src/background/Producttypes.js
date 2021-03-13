 import React, { useState, useEffect } from "react"
import Producttypescss from './Producttype.css'
import pro from '../background/pro.json';
import {Dropdown} from 'react-bootstrap'
import {GrCart} from 'react-icons/gr';
import {AiOutlineFacebook ,AiFillTwitterSquare}  from 'react-icons/ai';
import {FaInstagramSquare,FaThumbsDown ,FaThumbsUp} from 'react-icons/fa';
import { useStateValue } from '../background/StateProvider';
import {Navbar,NavDropdown,Nav, FormControl,Form,Button,} from "react-bootstrap"
import { Link } from "react-router-dom";
import ReactTabs from '../background/ReactTabs';
function Producttypes(props,{image,title,price,id,catagory}){

  

   const [ data, setData ] = useState([])

 

     useEffect(()=>{
  
   const filteredData = pro.filter((datas, i) =>{
        //  return datas.catagory === props.match.params.catagory      
     })
  
       setData(filteredData)
  
   
  
     }, [])  
   
 

    
    const [{basket} ,dispatch]=useStateValue();
    const addToBasket= () => {
      dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title: title,
        image: image,
        price: price
      }
    })
 
 
  }   
    return(<div className="container">
   

    

<Navbar> 
<Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000">Home</Nav.Link>
      <Nav.Link href="#link">Shop</Nav.Link>
      <Nav.Link href="#link">Default</Nav.Link>

      </Nav>
      </Navbar.Collapse>
      </Navbar>
      <hr/>

      <h4 className="catagory_of_products">Catagory of products</h4>
   

       
      
      <hr/>
       {pro.map((products)=>
 <div>
 <div className="row">
 
<div className="col-sm-3">



<Link to={`/productstype/${products.catagory}`} ><img src={products.image} className="background_image1_image"  alt={products.title} /></Link>
  </div>

 
 <div className="col-sm-6 productdetails">

 <h3>{products.title}</h3>  
       <h3>${products.price}</h3> 

    <p className="sd">Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
           Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
           nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,</p>
         <div>  <hr/>
            <p >color : <ul><a href="/"> <li className="green">green</li><li className="red">red</li></a></ul> </p> 
                   </div>  
            <div>      
          <hr/>
          <p className="productsizelist">size:  <Dropdown>
 <Dropdown.Toggle variant="" id="dropdown-basic">
 Select a Size
 </Dropdown.Toggle>

 <Dropdown.Menu>
   <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
   <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
   <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
   <Dropdown.Item href="#/action-3">Extra Large</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown></p> 
<hr/>




              </div>
              <div>
              <button  className="addbutton" onClick={addToBasket} >ADD TO CART<GrCart className="productcart"/></button></div>
            <div>

              <a href="/"> <p className="share">Share :<AiOutlineFacebook/><FaInstagramSquare/><AiFillTwitterSquare/></p></a> 
             
            </div>
           
</div>






</div>
<hr className="line"/>
   </div> )}
  
 





    </div>
  )

}
export default Producttypes; 