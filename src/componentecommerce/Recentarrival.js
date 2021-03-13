 import React, { useState } from 'react'
import { render } from 'react-dom';
import {GrCart} from 'react-icons/gr';

import {Link} from "react-router-dom";
import { useStateValue } from '../background/StateProvider';
 import  Recentarrivalcss from '../componentecommerce/Recentarrival.css';

 
  function Recentarrival({image,title,price,id}){



  const [{basket} ,dispatch]=useStateValue(0);
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



   return(<div className="container" >
   <div className="change">
    
<div className="product" key={id}>
  <Link to={`/system/${id}`}><img  className="imagepro" src={image}  key={id} alt=""/></Link>
<div className="productinfo">
<p className="producttype">Furnitures</p>

  <a className="titlelink" href="/"><p >{title}</p></a>
  <a className="productprice" href="/">  <p className="productprice">
       <small >$</small>
       <strong className="recentimg1">{price} </strong> 
      </p> </a> 
     
</div>
  <button className="addbutton" onClick={addToBasket}  >ADD TO CART <GrCart className="productcart"/></button>
</div>
</div>
</div> );
}
export default Recentarrival;   
 