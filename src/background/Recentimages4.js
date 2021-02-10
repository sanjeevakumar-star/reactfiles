import React, { useState } from "react"
import Recentimagecss from '../background/Recentimage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Dropdown} from 'react-bootstrap'
import {DropdownButton} from 'react-bootstrap';
import {Navbar,NavDropdown,Nav, FormControl,Form,Button,} from "react-bootstrap"
import {GrCart} from 'react-icons/gr';
import {AiOutlineFacebook ,AiFillTwitterSquare}  from 'react-icons/ai';

import {FaInstagramSquare,FaThumbsDown ,FaThumbsUp} from 'react-icons/fa';
import { useStateValue } from '../background/StateProvider';
import Collapse from 'react-bootstrap/Collapse'

function Recentimage4 ({image,title,price}){

    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);
   const [{basket} ,dispatch]=useStateValue()
    const addToBasket= () => {
      dispatch({
      type:'ADD_TO_BASKET',
      item:{
        title: title,
        price:price,
        image: image,

    }
    })
 
 
  }
  
    
 return(<div className="container">
        <div className="row">
 <div className="col-md-6">
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
    <a href="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg">
        <img className="background_image1" src={image} alt="seater-2"/></a>
       
       


   
   <a className="" href="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-1.jpg">
      


   </a>
   </div>

   <div className="col-md-6 productdetails">

       <h3>{title}</h3>
       <h3>${price}</h3>
       <p className="sd">Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
            Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
            nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,</p>
          <div>  <hr/>
             <p >color : <ul><a href=""> <li className="green">green</li><li className="red">red</li></a></ul> </p> 
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
    <Dropdown.Item href="#/action-3">Extre Large</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></p> 
<hr/>



 


               </div>
               <div>
               <button onClick={addToBasket} className="addbutton">ADD TO CART <GrCart className="productcart"/></button></div>
             <div>

               <a href=""> <p className="share">Share :<AiOutlineFacebook/><FaInstagramSquare/><AiFillTwitterSquare/></p></a> 
             </div>
 </div>
 
   </div>

<hr/>

<div className="collapsible">
<div class="row ">
<div className="col-sm-12">
  <button type="button" 
   className="finalreviews  " 
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
      >
  Description
  </button>
  <Collapse in={open}>
        <div id="example-collapse-text">
           <stromg> <p>1.product information</p></stromg>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec 
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
             Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
             <ul>
                 <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                 <li>Vivamus finibus vel mauris ut vehicula.</li>
                 <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>  </ul>
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec 
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
             Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
           
        </div>
      </Collapse>

  
  <button type="button"  className="finalreviews "   
  onClick={() => setOpen1(!open1)}
    aria-controls="example-collapse-text"
    aria-expanded={open1} >
  Additional Information
  </button>


  <Collapse in={open1}>
        <div id="example-collapse-text">
        <p>  <strong> Information</strong></p>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec 
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
             Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
             <ul>
                 <li>Faux suede fabric</li>
                 <li>Gold tone metal hoop handles.</li>
                 <li>RI branding</li> 
                 <li>Snake print trim interior</li> 
                 <li> Adjustable cross body strap  </li>
                 <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm  </li>
                 
                
              
                 
                 </ul>
               </div>
      </Collapse>


  <button type="button" className="finalreviews "
   onClick={() => setOpen2(!open2)}
   aria-controls="example-collapse-text"
   aria-expanded={open2}
  
  >
    Shipping&Returns
  </button>

  <Collapse in={open2}>
        <div id="example-collapse-text">
        <p>  <strong> Delivery & returns</strong></p>
       <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, 
           please view our Delivery informationWe hope you’ll love every purchase, but if you ever need to return an item you can do
           so within a month of receipt. For full details of 
             how to make a return, please view our Returns information</p>
             
               </div>
      </Collapse>



  <button type="button" className="finalreviews  " 
  
   onClick={() => setOpen3(!open3)}
   aria-controls="example-collapse-text"
   aria-expanded={open3}>
  Reviews (2)
  </button>

  <Collapse className="collapse" in={open3}>
        <div id="example-collapse-text">
            <h6>Reviews(2)</h6>
        <p>  <strong > 1.samantha.j Good, perfect size</strong></p>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec 
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
             Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
           <a href="" className="feedback"><FaThumbsUp/>Helpful(1)</a>
           <a href=""  className="feedback"><FaThumbsDown/>Unhelpful(0)</a>


           <p>  <strong  className="reviews">2. Rajesh.j Good, perfect size</strong></p>

                <p> Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos
                     enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p> 
          
                     <a href=""  className="feedback"><FaThumbsUp/>Helpful(1)</a>
                  <a href=""  className="feedback"><FaThumbsDown/>Unhelpful(3)</a>
               </div>
      </Collapse>

</div>
</div>
   </div>
    </div>)  ; 

    
}
export default Recentimage4;