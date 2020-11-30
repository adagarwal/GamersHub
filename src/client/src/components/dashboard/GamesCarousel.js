import React,{Component} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


class GamesCarousel extends Component {
    render(){
        return (
            <div className="GamesCarousel" >
                <Slider
                    dots={true}
                    slidesToShow={6}
                    arrows={true}
                >
                    <div ><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>
                    <div><img src="https://placekitten.com/200/200" className="image" style={{height:"30vh"}}></img></div>


                </Slider>
            </div>
        );
    }
}

export default GamesCarousel;