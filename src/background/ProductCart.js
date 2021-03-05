import React from 'react'
import ProductCartcss from './ProductCart.css'
import { useStateValue} from '../background/StateProvider';
function ProductCart ({image,title,price}){
    const [{basket} ,dispatch]=useStateValue();
  const removeitem = () => {
  dispatch({
      type:'REMOVE_FROM_CART',
      title:title,
      price: price    

      
  })
  }

return(<div className="container row" >
<div className=" col md-6 productcartdetails">
  <img  className="productcart_imagepro"src={image} alt=""/>
<div className="productcartinfo">

  <p className="productcart_title">{title}</p>
 
  <p className="productcartprice">
   
      <small>$</small>
     
      <strong>{price}</strong>
 
      </p>
    
    {/* {
              Array()
              .fill()
             .map(()=>(
    
              <h1></h1>
             ))
          }
 

   */}

<button className="remove_button" onClick={removeitem}  >REMOVE TO CART </button>
</div>
</div>

</div>);

}
export default ProductCart;