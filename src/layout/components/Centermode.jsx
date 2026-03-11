import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  NavLink } from "react-router";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";




const CenterMode=({items})=> {

     const { addItem } = useCart();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
   <>
   <div className="container">
     <div className="slider-container my-5">
      <Slider {...settings}>
        
    {items.map(item=>(
        <>
     
           <NavLink to={`/product/${item.id}`}>
          <img src={item.image} height={300} width={290}  style={{objectFit:'cover'}} />
        </NavLink>
      
<div className="addcart-basket">
     <button onClick={() => {addItem(item); toast.success("Məhsul səbətə əlavə edildi! 🛒"); } }  variant="secondary" className='btn' style={{marginTop:10, marginLeft:90, color:'#064C50'}}>ADD TO CART</button>
</div>
      </>
        
    ))}
       
      </Slider>
    </div>
   </div>
   
   </>
  );
}

export default CenterMode;
