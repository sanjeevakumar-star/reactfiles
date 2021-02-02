import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
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


function App(){


  
  return(<div >

    <Header/>
    <Center/>
   <Images/>
   <Products/>
<Shopcategories/>
<div className=" container">

 <div className="homerow">
   <div className="row">
     <div className="col-lg-3">
<Recentarrival 
image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
 
 title="seater-2"
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

  </div>);

}
export default App;
