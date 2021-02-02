import React from 'react'
import ReactDOM, { render } from 'react-dom';


import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import {BsArrowRight} from 'react-icons/bs';
function Center(){  
    var settings = {  
   dots:false,
   infinite: true,

}
    
return(<div className="container">

<div className="scroll">

   <div className="row">
      
      <div className="col-md-8 ">
      <Slider className="image"  {...settings}>  
      <div class="carousel-item">
      <img  classanme="img" src="https://d-themes.com/react/molla/demo-2/assets/images/home/sliders/slide-1.jpg"  />
      <div class="carousel-caption">
       <p className="para">Topsale collection</p>
       <h1 className="title">Living Room Furniture</h1>
      <a href=""> <button className="button">Shop now<BsArrowRight/></button></a>
     </div>   
    </div>
   
    <div class="carousel-item">
    <img  classanme="img"  src="https://d-themes.com/react/molla/demo-2/assets/images/home/sliders/slide-2.jpg"/>
       <div class="carousel-caption">
       <p className="para">News and inspiration</p>
       <h1 className="title"> New Arrivals</h1>
       <a href=""> <button className="button">Shop now<BsArrowRight/></button></a>
     </div>   
    </div>


    <div class="carousel-item">
       <img  classanme="img" src="https://d-themes.com/react/molla/demo-2/assets/images/home/sliders/slide-3.jpg"/>
       <div class="carousel-caption">
       <p className="para">Outdoor Furniture</p>
       <h1 className="title"> Outdoor Dinning Furniture</h1>
       <a href=""> <button className="button">Shop now<BsArrowRight/></button></a>
     </div>   
     </div>
    



      </Slider >
     
    </div>
      <div className="col-md-4 ">
      <a href="">
      <img  className="sideimg" src="https://d-themes.com/react/molla/demo-10/assets/images/home/banners/banner-6.jpg"  />
      <div class="carousel-caption">
       <p className="paras">Clearence</p>
       <h5 className="titles">Shoes40%   </h5>
       <a href=""> <button className="buttons">Shop now<BsArrowRight/></button></a>
       </div>
      </a>
     
      
      <a href="">
   
      <div className="row">
      <div className="col-md-6 ">
      <a href="">
    <img className="sideimage1"src="https://d-themes.com/react/molla/demo-10/assets/images/home/sliders/slide-1.jpg"/>
    <div class="carousel-caption">
       <p className="paras1">Perfect</p>
       <h5 className="titles1">Shoes50%   </h5>
       <a href=""> <button className="shoe">Shop now<BsArrowRight/></button></a>
       </div>
      </a>
   
      </div>
      <div className="col-md-6 ">
</div>

      </div>
      </a>
       
        </div>
           </div>
               </div>
               </div>)
}
export default Center;