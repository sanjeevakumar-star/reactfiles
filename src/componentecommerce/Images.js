import React from 'react'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  

 
 
function Images(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
  
    return(<div className="container">

        <div className="hello">
  
      <Slider  className="imagesalign"{...settings}>
     
           <a href=""> <img className="addimg" src="https://d-themes.com/react/molla/demo-2/assets/images/brands/1.png"/></a>
          
           <a href=""> <img  className="addimg" src="https://d-themes.com/react/molla/demo-2/assets/images/brands/5.png"/></a> 
         
           <a href="">  <img  className="addimg" src="https://d-themes.com/react/molla/demo-2/assets/images/brands/3.png"/></a>
          
           <a href=""> <img  className="addimg" src="https://d-themes.com/react/molla/demo-2/assets/images/brands/4.png"/></a>
       
           <a href=""><img  className="addimg" src="https://d-themes.com/react/molla/demo-1/assets/images/brands/2.png"/></a>
          
           <a href=""><img  className="addimg" src="https://d-themes.com/react/molla/demo-2/assets/images/brands/6.png"/></a>
          
            <a href=""> <img  className="addimg" src="https://d-themes.com/react/molla/demo-2/assets/images/brands/7.png"/> </a> 
          
            </Slider>
           
         
        </div>

        <div className="container">
         <h1 className="title1"> Trendy Products</h1>
        
        </div>
        <div className="list">

  <a className="lists" href="default">All</a>
 <a className="list1" href="">FURNITUE</a>
  <a className="list1" href="">DECARATION</a>
  <a className="list1" href="">LIGHTING</a>

        </div>


       
        </div>);
}
export default Images;