import React,{useState, useEffect} from 'react'
//import Products from './componentecommerce/Products';
//import  Productscss from './componentecommerce/Products.css';
//import Trendyimages from './background/Trendyimges'
 //import Trendyimagescss from './background/Trendyimages.css
 //import subtotalcss from './componentecommerce/Subtotal.css';
 //import Sideimg from './background/Sideimg'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as  Router,Switch,Route} from "react-router-dom"
import Checkout from './componentecommerce/Checkout';
import Login from './background/Login';
import Recentimage1 from './background/Recentimage.js';
import data from './componentecommerce/data'
import Header from './componentecommerce/Header';
import Footer from './componentecommerce/Footer';
// import ProductDetails from './background/ProductDetails';
import ProductDescription from './background/ProductDescription';
import Producttypes from './background/Producttypes';
import Furniture from './background/Furniture';
import Lightings from './components/Lightings';

import DecorationProducts from './components/DecorationProducts';
 import ReactTabs from './background/ReactTabs';
 import FurnituresProducts from './components/furnitures_products';
// import ReactTabs from './background/ReactTabs'
function App(){


 return( <div >
    
 <Router>
 <Switch>
 

   <div>
   <Header/> 
<Route  path="/" component={data} exact  />

 
<Route path="/login" component={Login} />

<Route path="/checkout" component={Checkout} />

<Route path="/system/:id"   component={Recentimage1} /> 

<Route path="/ProductDetails" component={ProductDescription} />

 {/* <Route path="/ProductType" component={Producttypes}  />     */}
   <Route path="/ProductType" component={ReactTabs} />  

<Route path="/productstype/:catagory" component={Furniture}/>

<Route path="/furniture" component={FurnituresProducts}  /> 

<Route path="/decoration" component={DecorationProducts}  />
<Route path="/lighting" component={Lightings}  />
  <Footer/>
 
</div>
  </Switch>
   </Router>

    
  </div>);
}
export default App;
















