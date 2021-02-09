 import React, { useState } from 'react'
import { render } from 'react-dom';
import {GrCart} from 'react-icons/gr';

import {Link} from "react-router-dom";
import { useStateValue } from '../background/StateProvider';


 
  function Recentarrival({image,title,price}){



  const [{basket} ,dispatch]=useStateValue()
    const addToBasket= () => {
      dispatch({
      type:'ADD_TO_BASKET',
      item:{
        title: title,
        image: image,
        price: price
      }
    })
 
 
  }



   return(<div className="container" >
   <div  >
    
<div className="product">
 <a href=""><img  className="imagepro"src={image} alt=""/></a> 
<div className="productinfo">

  <a className="titlelink" href=""><p >{title}</p></a>
  <p className="productprice">
      <small>$</small>
      <strong>{price}</strong>
      </p>
    
    {
              Array()
              .fill()
             .map(( )=>(
    
              <h1></h1>
             ))
          }
 
</div>
  

<button className="addbutton" onClick={addToBasket}  >ADD TO CART <GrCart className="productcart"/></button>

</div>



</div>




   
    </div> );


 }
 export default Recentarrival;   
 