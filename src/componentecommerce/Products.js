import React from 'react'
import {FaHeart} from 'react-icons/fa';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import {GrCart} from 'react-icons/gr';

function Products(){
  



    var settings = {
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
    return(
        <div className="container">
            <Slider className="product1" {...settings}>
            <div class="carousel-item">
         <a href=""> <img className="productimg" src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg" alt="product"/></a>  
            <div class="carousel-caption">
           
           <p className="productstock">Stock  <FaHeart className="favourite" /></p>
         
        </div>   
        <p className="productname">2-Seater</p> 
        <p className="price">$2,462.00</p> 
    <button className="addcart">ADD TO CART    <GrCart className="productcart"/></button>
       </div>
       

       <div class="carousel-item">
       <a href="">  <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
           <p className="productstock">New <FaHeart className="favourite" /></p>
          
        </div> 
        <p className="productname">carronade table lamp</p> 
        <p className="price">$1,400.00</p> 
        <button className="addcart">ADD TO CART       <GrCart className="productcart"/></button>
       </div>
       <div class="carousel-item">
       <a href="">    <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
          <p className="productstock">Sale  <FaHeart className="favourite" /></p>
         
        </div> 
        <p className="productname">Block Side Table/Trolly</p> 
        <p className="price">$2,043.00</p> 
        <button className="addcart">ADD TO CART <GrCart className="productcart"/></button>  
       </div>
       <div class="carousel-item">
       <a href="">    <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
           <p className="productstock">Hot   <FaHeart className="favourite"/></p>
        
        </div>   
        <p className="productname">Flow Slim Armchair</p> 
        <p className="price">$500.00</p> 
        <button className="addcart">ADD TO CART <GrCart className="productcart"/></button>
       </div>
       <div class="carousel-item">
       <a href="">    <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
          <p className="productstock"> Discount10%<FaHeart className="favourite" /> </p>
          
         </div>   
         <p className="productname">buttler stool lader</p> 
        <p className="price">$999.00</p> 
        <button className="addcart">ADD TO CART <GrCart className="productcart"/></button>
        </div>
        <div class="carousel-item">
        <a href="">   <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-7-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
            <p className="productstock">Outofstock  <FaHeart className="favourite" /></p>
          
         </div>  
         <p className="productname">Cushion Set 3 Pieces</p> 
        <p className="price">$1,999.00</p> 
        <button className="addcart">ADD TO CART <GrCart className="productcart"/></button> 
        </div>
      
        <div class="carousel-item">
        <a href="">    <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
           <p className="productstock">30%off <FaHeart className="favourite" /></p>
           
         </div> 
         <p className="productname">Large suspension LAMP</p> 
        <p className="price">$2,462.00</p> 
        <button className="addcart">ADD TO CART <GrCart className="productcart"/></button>  
        </div>
        <div class="carousel-item">
        <a href="">    <img className="productimg"src="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg" alt="product"/></a>
            <div class="carousel-caption">
                <p className="productstock">50%0ff  <FaHeart className="favourite" /></p>
          
         </div> 
         <p className="productname">Flow Slim Armchair-2</p> 
        <p className="price">$599.00</p> 
        <button className="addcart">ADD TO CART <GrCart className="productcart"/></button>
         
        </div>
               


            </Slider>
            <div className="linehr">
                <hr/>
            </div>
      <h2 className="categories">Shop by Categories</h2>

        </div>);
}
export default Products;