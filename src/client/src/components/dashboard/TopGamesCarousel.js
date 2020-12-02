import axios from "axios";
import React, {Component} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


class TopGamesCarousel extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount(){
        const endpoint = "/api/twitchTopGames/topgames";
        const setState = this.setState.bind(this);
        axios
            .get(endpoint)
            .then(res=>{setState({data:res.data})});
    }


    render() {
        if(this.state.data == null){
            return(<div>Loading</div>);
        }

        const jsonData = JSON.parse(JSON.stringify(this.state.data));
        const urls = []
        for (let i=0; i<20; i++){
            let thumbnail = jsonData.data[i].box_art_url;
            let game = jsonData.data[i].name;
            thumbnail = thumbnail.replace('{width}','600');
            thumbnail = thumbnail.replace('{height}','400');
            urls.push(<div key={i}></a><img  src={thumbnail} title={game} className="image" style={{height:"20vh", width:"30vh"}}></img></div>)
        }
        return (
            <div>
                {
                    <div className="TopGamesCarousel" >
                            <Slider
                                dots={true}
                                slidesToShow={5}
                                arrows={true}
                            >
                                {urls}

                            </Slider>
                        </div>
                }
            </div>);
    }
}

export default TopGamesCarousel;