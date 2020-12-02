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

        const setState = this.setState.bind(this)
        const endpoint = "/api/steam/featuredgames"
            axios
                .get(endpoint)
                .then(res=>{setState({data:res.data})});

    }

    render(){
        if(this.state.data == null){
            return(<div>Loading</div>);
        }

        const jsonData = JSON.parse(JSON.stringify(this.state.data.results))
        console.log(jsonData[0].image);
        const urls = []
        for (let i=0; i<20; i++){
            if(jsonData[i].image !=null){
                let thumbnail = jsonData[i].image.original
                console.log(thumbnail)
                urls.push(<div key={i}><img  src={thumbnail} className="image" style={{height:"20vh", width:"30vh"}}></img></div>)
            }
        }
        return (
            <div className="GamesCarousel" >
                <Slider
                    dots={true}
                    slidesToShow={5}
                    arrows={true}
                >
                    {urls}


                </Slider>
            </div>
        );
    }
}

export default GamesCarousel;