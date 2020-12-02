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
            .then(res=>{setState({data:res.data})});
    }


    render() {
        if(this.state.data == null){
            return(<div>Loading</div>);
        }

        const jsonData = JSON.parse(JSON.stringify(this.state.data));
        const urls = []
        for (let i=0; i<jsonData.data.length; i++){
            let thumbnail = jsonData.data[i].thumbnail_url;
            let title = jsonData.data[i].title;
            if (thumbnail != null) {
            thumbnail = thumbnail.replace('{width}','600');
            thumbnail = thumbnail.replace('{height}','400');
            let redirectUrl = "http://www.twitch.tv/" + jsonData.data[i].user_name;
            urls.push(<div key={i}> <a href={redirectUrl} target="_blank"> <img title={title} src={thumbnail} className="image" style={{height:"20vh", width:"35vh"}}></img> </a> </div>)
            }
        }
        return (
            <div>
                {
                    <div className="StreamersCarousel" >
                            <Slider
                                dots={true}
                                slidesToShow={4}
                                arrows={true}
                            >
                                {urls}

                            </Slider>
                        </div>
                }
            </div>);
    }
}

export default StreamersCarousel;