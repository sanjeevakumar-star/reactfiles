import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Recentcss from "../componentecommerce/Recent.css";
import { GrCart } from "react-icons/gr";
import { useStateValue } from "../background/StateProvider";
import { Link } from "react-router-dom";

function Recent({ image, title, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
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
    <div className="container">
      <div className="container">
        <Slider>
          <div className=" product">
            <Link to={`/system/${id}`}>
              {" "}
              <a href="">
                <img className="imagepro" src={image} alt="" />
              </a>{" "}
            </Link>
            <div className="productinfo">
              <p className="producttype">Furnitures</p>
              <Link to={`/system/${id}`}>
                <a className="titlelink" href="">
                  <p>{title} </p>
                </a>
              </Link>
              <a className="productprice">
                <p className="productprice">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>
              </a>
              {/*  
 {
           Array()
           .fill()
          .map(( )=>(
 
           <h1></h1>
          ))
       } */}
            </div>

            <button className="addbutton" onClick={addToBasket}>
              ADD TO CART <GrCart className="productcart" />
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Recent;
