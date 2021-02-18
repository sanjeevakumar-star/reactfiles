import React from 'react'
import FurnitureProducts from './furnitureProducts'
function FurnituresProducts(){

    return(  <div className="container">

       <div className="row">
           <div className="col-lg-3 md-3 sm-3">
     

<FurnitureProducts 
 id="1"
image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
 
 title="seater-2 sitting"
 price={2,111.00}

/>
</div>
<div className="col-lg-3 md-3 sm-3">
     
< FurnitureProducts
 id="3"
title="Block Side Table/Trolly"

price={1,199.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
/>
</div>
<div className="col-lg-3 md-3 sm-3">
     
< FurnitureProducts
 id="4"
title="Flow Slim Armchair"
price={1,299.10}
 
image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"

/>
</div>
<div className="col-lg-3 md-3 sm-3">
     

< FurnitureProducts
 id="5"
title="buttler stool lader"
price={1,309.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 

/>
</div>
<div className="col-lg-3 md-3 sm-3">
     
<FurnitureProducts
 id="8"
title="Garden chair"
price={2,111.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"

/>


</div>
    

</div>
       </div>
    )
}
export default FurnituresProducts;  