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
 <a  href=""><Link to="products_details"><img  className="imagepro"src={image} alt=""/></Link></a> 
<div className="productinfo">

  <a className="titlelink" href=""><p >{title}</p></a>
  <a className="productprice">  <p className="productprice">
      <small>$</small>
      <strong className="recentimg1">{price}</strong>
      </p> </a> 
    
    {
              Array()
              .fill()
             .map(( )=>(
    
              <p></p>
             ))
          }
 
</div>
  <button className="addbutton" onClick={addToBasket}  >ADD TO CART <GrCart className="productcart"/></button>
</div>
</div>
</div> );
}
export default Recentarrival;   
 