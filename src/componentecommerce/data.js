import React from 'react'

import Header from '../componentecommerce/Header';
import Center from '../componentecommerce/Center';
import Images from '../componentecommerce/Images';
import Shopcategories from '../componentecommerce/Shopcategories';
import Payment from '../componentecommerce/Payment.js';
import Blogs from '../componentecommerce/Blogs';
import Footer from '../componentecommerce/Footer';

//import Login from './background/Login';
//import Sideimg from './background/Sideimg';
//import Recentimage1 from './background/Recentimage.js'
import Pro from "../background/pro"; 
import Trendproduct from '../componentecommerce/Trendproduct'
import Recentarrivalproducts from  '../componentecommerce/Recentarrivalproducts.js'
//import ProductsTypeimage from '../background/ProductsTypeimage';

function Data(){
    return(
        <div>
           

 <Center/>
   <Images/>
    <Trendproduct/>
     <Shopcategories/>
       <Recentarrivalproducts/>
         <Payment/>
           <Blogs/>
           
           
               {/* <Pro/> */}
        </div>
    )
}
export default Data;