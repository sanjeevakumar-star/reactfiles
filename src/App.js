import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Link} from "react-router-dom";
import{BrowserRouter as  Router,Switch,Route} from "react-router-dom"
import Header from './componentecommerce/Header';
import  css from './componentecommerce/Header.css';
import Center from './componentecommerce/Center';
import  Centercss from './componentecommerce/Center.css';
import Images from './componentecommerce/Images';
import  Imagescss from './componentecommerce/Images.css';
import Products from './componentecommerce/Products';
import  Productscss from './componentecommerce/Products.css';
import Shopcategories from './componentecommerce/Shopcategories';
import  Shopcategoriescss from './componentecommerce/Shopcategories.css';
import Recentarrival from './componentecommerce/Recentarrival';
import  Recentarrivalcss from './componentecommerce/Recentarrival.css';
import Payment from './componentecommerce/Payment.js';
import  Paymentcss from './componentecommerce/Payment.css';
import Blogs from './componentecommerce/Blogs';
import  Blogscss from './componentecommerce/Blogs.css';
import Footer from './componentecommerce/Footer';
import  Footercss from './componentecommerce/Footer.css';
import Checkout from './componentecommerce/Checkout';
import Checkoutcss from './componentecommerce/Checkout';


import Recent from './componentecommerce/Recent';
import Recentcss from './componentecommerce/Recent.css';


import Login from './background/Login';
import Logincss from './background/Login.css';
import Trendyimages from './background/Trendyimges'
import Trendyimagescss from './background/Trendyimages.css'

import Sideimg from './background/Sideimg';
import Sideimgcss from './background/Sideimg.css'
import Recentimage1 from './background/Recentimage.js'
import Recentimage2 from './background/Recentimage2.js'
import Recentimage3 from './background/Recentimage.js'
import Recentimage4 from './background/Recentimage.js'
 
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  


//import subtotalcss from './componentecommerce/Subtotal.css';\


function App(){

  
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

return( <div >
 
<Router>
<div>
 
<Switch>
{/*login page*/}
    <Route path="/login" >
      <Login/>
    </Route>

{/*cart details*/}
 {/*Links for checkout products*/}
     <Route path="/checkout">
           <Header/> <Checkout/>
     </Route>
 

  
     <Route path="/sideimg1">

   <Header/> 
   <Sideimg/>
   </Route>
   <Route path="/sideimg2">
   <Header/> 
   <Sideimg/>
   </Route>
   <Route path="/products_details" >
   <Header/> 
<Recentimage1/>
   <Footer/>
   </Route>
   <Route path="/recentimg1" >
   <Header/> 
<Recentimage1
 image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"

 title="Seater-2"
 price={199.0}
 />
<Footer/>
</Route>
   
<Route path="/recentimg2" >

   <Header/> 
<Recentimage2 path="/recentimg2"

title="carronade table lamp"

price={2,220.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
/>
   <Footer/>
   </Route>


   <Route path="/recentimg3" >
   <Header/> 
<Recentimage3
title="Block Side Table/Trolly"

price={1,199.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg" />
   <Footer/>
   </Route>

   <Route path="/recentimg4" >
   <Header/> 
<Recentimage4

title="Flow Slim Armchair"
price={1,299.10}
 
image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"/>
   <Footer/>
   </Route>

   



   
   <div>
 <Header/> 
 <Center/>
   <Images/>


   {/*recent slider  */}

   <Slider  className="container product1 " {...settings}>
   <Link to="/recentimg1">
   <Recent
   image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
 
   title="seater-2 sitting"
   price={2,111.00}
  
   /></Link>
    <Link to="/recentimg2">
   <Recent
   title="carronade table lamp"
   price={2,220.00}
   
   image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
   
  />
  </Link>
  <Link to="/recentimg3">
  <Recent
 title="Block Side Table/Trolly"

 price={1,199.00}
 
 image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
  />
  </Link>
     <Link to="/recentimg4">
  <Recent
  title="Flow Slim Armchair"
  price={1,299.10}
   
  image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"/>
  </Link>
  <Recent 
  title="buttler stool lader"
  price={1,309.00}
  
  image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 
  />
  <Recent
  title="buttler stool lader"
  price={1,309.00}
  
  image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 
  />
  <Recent
  
title="Large suspension LAMP"
price={2,111.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"/>
  <Recent
  title="Garden chair"
  price={2,111.00}
  
  image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
  />



   </Slider>
   

   
  <Shopcategories/>

  
<div className=" container">
<div className="homerow">
<div className="row">
 
     <div className="col-lg-3">
{/* recent arrival class*/}

 <Recentarrival 
image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
 
 title="seater-2 sitting"
 price={2,111.00}

/>
</div>
<div className="col-lg-3">

< Recentarrival 

title="carronade table lamp"
price={2,220.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"

/>
</div>
<div className="col-lg-3">
< Recentarrival

title="Block Side Table/Trolly"

price={1,199.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
/>

</div>

<div className="col-lg-3">
< Recentarrival

title="Flow Slim Armchair"
price={1,299.10}
 
image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"

/>
</div>


<div className="col-lg-3">

< Recentarrival
title="buttler stool lader"
price={1,309.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 

/>
</div>
<div className="col-lg-3">
< Recentarrival
                               
title="Cushion Set 3 Pieces"
price={2,149.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-7-2.jpg"

/>
</div>

<div className="col-lg-3">
< Recentarrival

title="Large suspension LAMP"
price={2,111.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"

/>
</div>
<div className="col-lg-3">
<Recentarrival

title="Garden chair"
price={2,111.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"

/>
</div>
</div>
</div>
</div>


<Payment/>
  <Blogs/>
  <Footer/>
 
</div>
  </Switch>   
</div>
</Router>








 </div>);

}

export default App;

