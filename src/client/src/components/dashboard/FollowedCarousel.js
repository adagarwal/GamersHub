import React,{Component} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from "axios";
import Card from "@material-ui/core/Card";

class FollowedStreamers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:null,
            dataset:[],
            thumbs:[],
            total:0,
            viewers:0,
            thumbsReco:[],
            recoName:[]
        }
    }

    async componentDidMount() {

        const setState = this.setState.bind(this)
        const endpoint = "https://api.twitch.tv/helix/users/follows?from_id="+this.props.uid;
        const getUserEndPoint = "https://api.twitch.tv/helix/users?id="+this.props.uid;
        const getstreamendpoint = "https://api.twitch.tv/helix/search/channels"
        const authcode = "Bearer " + this.props.acc_token;
        const resp = await axios.get(endpoint,{headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}});
        const respUser = await axios.get(getUserEndPoint,{headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}});
        console.log("ADITYA DEBUG: " + JSON.stringify(respUser.data.data));
        const total = JSON.parse(JSON.stringify(resp.data.total));
        const viewers = JSON.parse(JSON.stringify(respUser.data.data[0].view_count))
        const jsonData = JSON.parse(JSON.stringify(resp.data.data));
        const channelId = []
        const gameId = []
        const thumbsReco = []
        const recoName = []
        console.log("ADITYA DEBUG TOTAL: " + total);
        for (let i=0; i < total; i++) {
            let name = jsonData[i].to_name;
            let abc = getstreamendpoint + "?query=" + name;
            const tresp = await axios.get(abc, {headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}});
            let tresp_jsonData = JSON.parse(JSON.stringify(tresp.data));
            let thumb_data = tresp_jsonData.data[0].thumbnail_url;
            this.state.thumbs[i] = thumb_data;
            channelId[i] = jsonData[i].to_id;
            gameId[i] = tresp_jsonData.data[0].game_id;
            console.log("Json Data: "+ i + " : "+JSON.stringify(tresp_jsonData.data[0]));
        }

        for (let i=0; i<total; i++){
            let game = gameId[i];
            let reco = "https://api.twitch.tv/helix/streams?first=5&game_id=" + game;
            const recoResp = await axios.get(reco, {headers: {'Client-ID': 'd2qvua62wbnmd2falukeg1lqdvefpq','Authorization':authcode}});
            const size = recoResp.data.data.length;
            for (let j=0; j<size; j++){
                const recoData = recoResp.data.data[j];
                if(!channelId.includes(recoData.user_id)){
                    thumbsReco.push(recoData.thumbnail_url);
                    recoName.push(recoData.user_name);
                }
            }
        }

        setState({
            data:resp.data,
            total:total,
            viewers:viewers,
            thumbsReco:thumbsReco,
            recoName:recoName
        })
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
        const reco_urls = []
        for (let i=0; i<total; i++){
            if(jsonData[i].to_name !=null ){
                let name = jsonData[i].to_name;

                let redirectUrl = name;

                urls.push(<div key={i} onClick={() => {this.props.openModal("http://player.twitch.tv/?channel="+redirectUrl+"&parent=localhost")}}>
                    <img title={name} src={this.state.thumbs[i]} className="image" style={{height:"20vh", width:"30vh"}}></img></div>)
            }
        }

        for (let j=0; j<this.state.thumbsReco.length; j++){
            let thumbnail = this.state.thumbsReco[j];
            let recoName = this.state.recoName[j];
            if (thumbnail != null) {
                thumbnail = thumbnail.replace('{width}','600');
                thumbnail = thumbnail.replace('{height}','400');
                reco_urls.push(<div key={j} onClick={() => {this.props.openModal("http://player.twitch.tv/?channel="+recoName+"&parent=localhost")}}>
                    <img src={thumbnail} className="image" style={{height:"20vh", width:"35vh"}} data-toggle="modal">
                    </img></div>)
            }
        }

        return (
            <div>
                <div className="col col-sm-4" style={{ paddingLeft: "5vh", display:"inline", paddingTop:"3vh"}}>
                    <Card variant={"outlined"} style={{borderRadius:"25px",
                        width:"350px",
                        height:"350px", color: "#7289da", backgroundColor: "#23272a"}}>
                        <h3 style={{marginTop:"150px"}}>Subsriptions: {this.state.total}</h3>
                    </Card>
                </div>
                <div className="col col-sm-4" style={{ paddingLeft: "30vh", display:"inline", paddingTop:"3vh"}}>
                    <Card variant={"outlined"} style={{borderRadius:"25px",
                        width:"350px",
                        height:"350px", color: "#7289da", backgroundColor: "#23272a"}}>
                        <h3 style={{marginTop:"150px"}}>Viewers: {this.state.viewers}</h3>
                    </Card>
                </div>
                <div className="col col-sm-4" style={{ paddingLeft: "30vh", display:"inline", paddingTop:"3vh"}}>
                    <Card variant={"outlined"} style={{borderRadius:"25px",
                        width:"350px",
                        height:"350px", color: "#7289da", backgroundColor: "#23272a"}}>
                        <h3 style={{marginTop:"150px"}}>Subsriptions: {this.state.total}</h3>
                    </Card>
                </div>
                <div className="col s10" style={{ paddingLeft: "5vh", paddingTop: "3vh"}}>
                    <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Followed Streamers</b></h6>
                    <div className="FollowedCarousel" >
                        <Slider dots={true} slidesToShow={4} arrows={true}>
                            {urls}
                        </Slider>
                    </div>
                </div>
                <div className="col s10" style={{ paddingLeft: "5vh", paddingTop: "3vh"}}>
                    <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Recommended Live Streams</b></h6>
                    <div className="FollowedCarousel" >
                        <Slider dots={true} slidesToShow={4} arrows={true}>
                            {reco_urls}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default FollowedStreamers;