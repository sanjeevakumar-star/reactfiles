import React from 'react'
import {BsArrowRight} from 'react-icons/bs';
function Shopcategories(){
    return(<div className="container">
     <div className="Shoppingcategories">
        <div className="row">
            <div className="col-md-4 ">
            <a href="">   <img className="categorieimg1" src="https://d-themes.com/react/molla/demo-9/assets/images/home/sliders/slide-1.jpg" alt="shoppping categories"/>
              <div class="carousel-caption">
     
       <p className="titles">Womens sportswear 2021  </p>
       <a href=""> <button className="buttons">Shop now<BsArrowRight/></button></a>
       </div></a>
           
            </div>
            <div className="col-md-4">
            <a href=""> <img className=" categorieimg2 " src="https://d-themes.com/react/molla/demo-7/assets/images/home/posts/post-3.jpg" alt="shooping categories"/>
            <div class="carousel-caption">
      
       <p className="titles">Shoes for Womens  </p>
       <a href=""> <button className="buttons">Shop now<BsArrowRight/></button></a>
       </div></a>
           
           <div className="">
      <a href=" ">      <img  className="Categorieimg4" src="https://d-themes.com/react/molla/demo-7/assets/images/blog/grid/3cols/post-2.jpg"/>
            <div class="carousel-caption">
       
       <p className="makeup">Fashions   </p>
       <a href=""> <button className="girlsmakeup">Shop now<BsArrowRight/></button></a>
       </div></a>
       </div>
           
            </div>
            <div className="col-md-4 ">
            <a href="">    <img  className="categorieimg3" src=" https://d-themes.com/react/molla/demo-9/assets/images/home/sliders/slide-2.jpg" alt="shopping categories"/>
         <div class="carousel-caption">
       
       <p className="titles">Mens jacket  </p>
       <a href=""> <button className="buttons">Shop now<BsArrowRight/></button></a>
       </div></a>
          
            </div>

        </div>
        
        
        
        </div>
        <div>
        <h3 className="arrivals"><b>Recent Arrivals</b></h3>
        <div className="list">

<a className="lists" href="default">All</a>
<a className="list1" href="">FURNITUE</a>
<a className="list1" href="">DECARATION</a>
<a className="list1" href="">LIGHTING</a>

      </div>
        </div>
        </div>);

}
export default Shopcategories;
