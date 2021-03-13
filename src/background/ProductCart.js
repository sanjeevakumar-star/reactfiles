import React from "react";
import ProductCartcss from "./ProductCart.css";
import { useStateValue } from "../background/StateProvider";
import { useState } from "react";

function ProductCart({ image, title, price, id }) {
  // const [count, setCount] = useState(0);
 
  const [{ basket }, dispatch] = useStateValue();
  
  const removeitem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      image: image,
      title: title,
      price: price,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });

    //
  };

  

  return (
    <div className="container row">
      <div className=" col md-6 productcartdetails">
        <img className="productcart_imagepro" src={image} alt="" />
        <div className="productcartinfo">
          <p className="productcart_title">{title}</p>

          <p className="productcartprice">
            <small>$</small>

            <strong>{price}</strong>
          </p>

          <button className="remove_button" onClick={removeitem} >
            REMOVE TO CART
          </button>

          <div>
            <button
              // className="quantity"

              onClick={addToBasket}
            >
              +
            </button>

        {basket.length} 

            <button
              // className="quantity"

              // onClick={}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCart;
