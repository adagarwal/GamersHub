import axios from "axios";
import React, {Component} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


class StreamersCarousel extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        const endpoint = "/api/twitch/featuredstreams";
        const setState = this.setState.bind(this);
        axios
            .get(endpoint)
            .then(res=>{setState({data:res})});
    }
    render() {
        if(this.state.data == null){
            return(<div>Loading</div>);
        }
         //JSON.parse(this.state.data);
        const {abc} = JSON.parse(JSON.stringify(this.state.data));
        console.log(abc);
        return (
            <div>
                {
                    <div className="StreamersCarousel" >
                            <Slider
                                dots={true}
                                slidesToShow={6}
                                arrows={true}

                            >
                                <div>${JSON.stringify(this.state.data)}</div>
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
                }
            </div>);
    }
}

export default StreamersCarousel;