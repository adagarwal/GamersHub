import React,{Component} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from "axios";


class GamesCarousel extends Component {
    constructor() {
        super();
        this.state = {
            data:null,
            dataset:[]
        }
    }

    componentDidMount() {
        const listGames = ['730', '584220', '584370', '584400', '577320', '575760', '571340', '568840']
        const setState = this.setState.bind(this)
        for(const id of listGames){
            let endpoint = "/api/steam/featuredgames?id="+id
            axios
                .get(endpoint)
                .then(res=>{this.state.dataset.push(res); setState({data:res})});
        }
    }

    render(){
        if(this.state.dataset.length == 0){
            return(<div>Loading</div>);
        }
        let size = this.state.dataset.length
        const jsonData = JSON.parse(JSON.stringify(this.state.dataset[size-1].data))
        const urls = []
        for (let i=0; i<this.state.dataset.length; i++){
            let thumbnail = this.state.dataset[i].data.header_image
            console.log(thumbnail)
            urls.push(<div key={i}><img  src={thumbnail} className="image" style={{height:"20vh", width:"30vh"}}></img></div>)
        }
        return (
            <div className="GamesCarousel" >
                <Slider
                    dots={true}
                    slidesToShow={4}
                    arrows={true}
                >
                    {urls}


                </Slider>
            </div>
        );
    }
}

export default GamesCarousel;