import React, { useState } from "react"
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import Recentcss from  '../componentecommerce/Recent.css'
import {GrCart} from 'react-icons/gr';
import { useStateValue } from '../background/StateProvider';
import {Link} from "react-router-dom";
function Recent ({image,title,price,id}){

   

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
  
return(<div className="container" >
<div className="container" >
<Slider>
<div className="product">
            <Link to={`/system/${id}`}> <a href=""><img  className="imagepro"src={image} alt=""/></a> </Link>
<div className="productinfo">

<Link to={`/system/${id}`}><a className="titlelink" href=""><p >{title} </p></a></Link>
 <a className="productprice"><p className="productprice">
   <small>$</small>
   <strong>{price}</strong>
   </p></a> 
 
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

</Slider>

</div>



 </div> );
}          
export default Recent;

































    {/*  var settings = {
        dots: true,
        infinite: false,
      
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    const [products]=useState([{
        image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg",
 
        title:"seater-2 sitting",
        price:111.00
       
    },{
        title:"carronade table lamp",
     price:220.00,
     image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"

    },{
        title:"Block Side Table/Trolly",

        price:199.00,
        
        image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"

    },{
        title:"Flow Slim Armchair",
price:299.10,
 
image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"
    },{


        title:"buttler stool lader",
price:309.00,

image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 

    },{

        title:"Cushion Set 3 Pieces",
price:149.00,

image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-7-2.jpg"

    },{
        
title:"Large suspension LAMP",
price:211.00,

image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"

    },{

        title:"Garden chair",
        price:131.00,
        
        image:"https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
        

    }
]);

  
    


    
 return(<div className="container">
        <Slider {...settings}>
      

{products .map((product, idx)=>(
    <div key="idx">
        <img className="imagepro"   src={product.image} alt={product.title}/>
       <a className="titlelink"> <p>{product.title}</p></a>
    <strong className="productprice">${product.price}</strong>

<button className="addbutton" onClick={addToBasket}>ADD TO CART<GrCart className="productcart"/></button>
</div>
))}</Slider>
 
 
  <div className="linehr">
                <hr/>
            </div>
      <h2 className="categories">Shop by Categories</h2>
    </div>);
}                 


*/}

