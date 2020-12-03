import React,{Component} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from "axios";
import { set } from "mongoose";

class FollowedStreamers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:null,
            dataset:[],
            thumbs:[]
        }
    }

    async componentDidMount() {

        const setState = this.setState.bind(this)
        const endpoint = "https://api.twitch.tv/helix/users/follows?from_id="+this.props.uid;
        const getstreamendpoint = "https://api.twitch.tv/helix/search/channels"
        const authcode = "Bearer " + this.props.acc_token;
        const resp = await axios.get(endpoint,{headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}});
        console.log("ADITYA DEBUG: " + JSON.stringify(resp.data));
        const total = JSON.parse(JSON.stringify(resp.data.total));
        const jsonData = JSON.parse(JSON.stringify(resp.data.data));
        console.log("ADITYA DEBUG TOTAL: " + total);
        for (let i=0; i < total; i++) {
            let name = jsonData[i].to_name;
            console.log("NAME: " + i + " "+ name);
            let abc = getstreamendpoint + "?query=" + name;
            const tresp = await axios.get(abc, {headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}});
            console.log("TRESP "+i+" "+JSON.stringify(tresp.data));
            let tresp_jsonData = JSON.parse(JSON.stringify(tresp.data));
            let thumb_data = tresp_jsonData.data[0].thumbnail_url;
            console.log("ABCD: "+thumb_data);
            this.state.thumbs[i] = tresp_jsonData.data[0].thumbnail_url;
        }
        setState({
            data:resp.data
        })
        //axios
        //        .get(endpoint,{headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}})
        //        .then(
        //            res=>{
        //                console.log("FOLLOW DATA: " + JSON.stringify(res.data));
        //                setState({data:res.data})
        //           });

    }

    render(){
        console.log("FOLLOWED AT: " + this.props.acc_token);
        console.log("FOLLOWED USERID: " + this.props.uid);
        if(this.state.data == null){
            return(<div>Loading</div>);
        }

        const total = JSON.parse(JSON.stringify(this.state.data.total));
        console.log("TOTAL ENTRIES: " + total);
        const jsonData = JSON.parse(JSON.stringify(this.state.data.data));
        const urls = []

        for (let i=0; i<total; i++){
            if(jsonData[i].to_name !=null ){
                let name = jsonData[i].to_name;

                let redirectUrl = "https://www.twitch.tv/" + name;

                urls.push(<div key={i}><a href={redirectUrl} target="_blank"><img title={name} src={this.state.thumbs[i]} className="image" style={{height:"20vh", width:"30vh"}}></img></a></div>)
            }
        }
        return (
            <div className="FollowedCarousel" >
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

export default FollowedStreamers;