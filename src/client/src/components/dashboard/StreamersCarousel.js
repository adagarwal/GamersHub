import axios from "axios";
import React,{useState, useEffect} from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function StreamersCarousel() {
  //const [featuredStreams, updateData] = useState();
  //useEffect(() => {
  //  const getData = async() => {
  //     const resp = await axios.get("/api/twitch/featuredstreams");
  //     updateData(resp);
  //  }
  //  getData();
  // },[]);

  //window.alert("DATA" + JSON.stringify(featuredStreams));

  //var pobj = JSON.parse(featuredStreams);
  var resp;
  axios
  .get("/api/twitch/featuredstreams")
  .then(res=>{resp = res; window.alert(JSON.stringify(res))});

  window.alert("RESP" + JSON.stringify(resp));

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
