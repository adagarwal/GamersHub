import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


export default function StreamersCarousel() {

  return (
    <div className="StreamersCarousel" >
      <Slider
        dots={true}
        slidesToShow={6}
        arrows={true}

      >
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
       <div ><img src="https://placekitten.com/300/300" className="image" style={{height:"30vh"}}></img></div> 
 


      </Slider>
    </div>
  );
}