import React  from 'react'
import Subtotalcss from  '../background/Subtotal.css';


import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';


  function Total(){

    const getCartTotal=(basket)=>
    basket?.reduce((amount,item)  =>item.price+amount,0);
     

    const [{basket} ,dispatch]= useStateValue();
    return(<div className="container">
    
    <div className="subtotal"> 
<form className="totalform">
    <CurrencyFormat 
    
    renderText={(value)=>(

      <h5 className="total_length">
       Number Of Products : {basket.length}
      <hr/>
    
 <h5> Subtotal  Amount: {` ${value}`}</h5>

        </h5> 
    )}
    
    decimalScale={2}
    value={getCartTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    />

<hr/>
     <p>Shopping:</p>
     <input type="radio" id="male" name="gender" value="male"/>
  <label for="male">Free Shipping</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Standard</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Express</label><br/>
     <p>Estimate for your country </p>
     <div>
     <a href=" " className="address">change address</a>
     <hr/>
     </div>
    <button className="totalcheckout">PROCEED TO CHECKOUT</button>
    <hr/>
    <button className="totalcheckout">COUNTINUE SHOPPING</button>
    </form>
    </div>
    </div>);





  }
  export default Total;