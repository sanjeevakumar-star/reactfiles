import React from 'react'
import { render } from 'react-dom';


import {GrCart} from 'react-icons/gr';
 function Recentarrival({price,image,title}){


     return(<div className="container" >
         <div >
    <div className="product">
    <img  className="imagepro"src={image} alt=""/>
    <div className="productinfo">
  
        <p>{title}</p>
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
           


    <button className="addbutton">ADD TO CART <GrCart className="productcart"/></button>
   
    </div>
   
    </div>
  
     
    </div> );


 }
 export default Recentarrival;