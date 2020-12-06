import axios from "axios";
import React, { Component } from "react";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';
import jwt_decode from "jwt-decode";
import FollowedStreamers from "./FollowedCarousel.js"

var ls = require('local-storage')

class TwitchHome extends Component {
    constructor() {
        super();
        this.state = {
            buttonClicked: false,
            done: null,
            atk: null,
            local_access_token: null,
            local_user_id: null,
            showComponent:false,
            url:null
        }
        this.playVideo = this.playVideo.bind(this)
        this.closeVideo = this.closeVideo.bind(this)
    }
    playVideo(url){
        console.log("Image clicked!");
        this.setState({showComponent:true, url:url});
    }

    closeVideo(){
        this.setState({showComponent:false})
    }

    setOnClick() {
        console.log("REDIRECT: " + document.body.baseURI);
        ls.set("bar", 1);
        return;
    }
    setOnClickS1() {
        ls.set("bar", 2);
        return;
    }
    render() {  
        const setState = this.setState.bind(this);
        console.log("FOO:" + ls.get("bar"));
        if (ls.get("bar") === null) {
            return (
                <div >
                    <div className="row" style={{ backgroundColor: "#99aab5" }}>
                        <HeaderBar></HeaderBar>
                        <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                            <NavPane></NavPane>
                            <div className="column s10">
                                <h7 style={{ color: "#7289da", backgroundColor: "#23272a" }}><b>WELCOME TO TWITCH</b></h7>
                                <div style={{ marginTop: "15%" }}>
                                    <a href='https://id.twitch.tv/oauth2/authorize?client_id=d2qvua62wbnmd2falukeg1lqdvefpq&response_type=code&redirect_uri=http://localhost:3000/twitchhome&scope=viewing_activity_read+openid&state=2nbx4f097i1zdy8f8cbq4henhzxw3q&claims={"id_token":{"preferred_username":null}}'>
                                        <button style={{ height: "10vh", width: "30vh", backgroundColor: "#23272a", paddingLeft: "0px", marginLeft: "0vh" }} onClick={() => { this.setOnClick()}}>
                                            <b style={{ color: "#7289da", paddingLeft: "10%" }}>LOGIN</b>
                                        </button>
                                    </a>
                                    {console.log("FOOBAR: " + ls.get("bar"))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (ls.get("bar") === 1) {
            //parse BASE URI for code
            var acode = document.body.baseURI;
            var def = acode.split('?')[1];
            def = '?' + def;
            var searchParams = new URLSearchParams(def);
            var access_code = searchParams.get("code");
            //axios call with code for access code
            console.log(access_code);
            var epurl = "https://id.twitch.tv/oauth2/token?client_id=d2qvua62wbnmd2falukeg1lqdvefpq&client_secret=2nbx4f097i1zdy8f8cbq4henhzxw3q&code=" +
                        access_code + "&grant_type=authorization_code&redirect_uri=http://localhost:3000/twitchhome";
            if (this.state.done === null) {
            axios.post(epurl)
            .then(res=>{
                setState({done:true});
                const tk = JSON.parse(JSON.stringify(res.data));
                setState({atk:tk.access_token});
                console.log("TOKE: " + this.state.atk);
                console.log("RESDATA: " + JSON.stringify(res.data));
                ls.set("atoken", tk.access_token);
                var jwttoken = tk.id_token;
                var jsonData = jwt_decode(jwttoken);
                const parsedData = JSON.parse(JSON.stringify(jsonData));
                const twitchuserid = parsedData.sub;
                ls.set("twitchuserid", twitchuserid);
            })
            .catch(err=>{console.log(err)});
            } 
            return(
                <div >
                <div className="row" style={{ backgroundColor: "#99aab5" }}>
                    <HeaderBar></HeaderBar>
                    <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                        <NavPane></NavPane>
                        <div className="column s10">
                            <h7 style={{ color: "#7289da", backgroundColor: "#23272a" }}><b>WELCOME TO TWITCH</b></h7>
                            <div style={{ marginTop: "15%" }}>
                                {<a href='/twitchhome'>
                                <button style={{ height: "10vh", width: "30vh", backgroundColor: "#23272a", paddingLeft: "0px", marginLeft: "0vh" }} onClick={() => { this.setOnClickS1()}}>
                                            <b style={{ color: "#7289da", paddingLeft: "10%" }}>CONFIRM</b>
                                </button>
                                </a>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            );
        } else {
            console.log("FINAL TOKEN: " + ls.get("atoken"));
            this.state.local_access_token = ls.get("atoken");
            console.log("USERID: " + ls.get("twitchuserid"));
            this.state.local_user_id = ls.get("twitchuserid");
            return (
                <div >
                    <div className="row" style={{ backgroundColor: "#99aab5" }}>
                        <HeaderBar></HeaderBar>
                        <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                            <NavPane></NavPane>
                            {this.state.showComponent?
                                <div className="col-lg-12 -dialog"
                                     style=
                                         {{position:"absolute", display:"block", overflow:"hidden",
                                             zIndex: 1050, webkitOverflowScrolling: "touch",
                                             height: "calc(100% - 14vh)", width: "calc(100% - 20vh)", left:"20vh"}}>
                                    <div className="modal-content -dialog" style={{height:"100%"}}>
                                        <div className="emdeb-responsive embed-responsive-16by9 z-depth-1-half" style={{height:"100%"}}>
                                            <button style={{position:"absolute", display:"block", overflow:"hidden",
                                                zIndex: 1050, webkitOverflowScrolling: "touch",
                                                height: "5vh", width: "15vh", left:"120vh"}} onClick={this.closeVideo}>Close Video</button>
                                            <iframe className="embed-responsive-item"
                                                    src={this.state.url}
                                                    allowFullScreen={true}
                                                    frameBorder={30}
                                                    scrolling={"no"}
                                                    style={{height:"100%", width:"calc(100% - 20vh)"}}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>:
                                null}
                            <div className="column s10">
                                <h7 style={{ color: "#7289da", backgroundColor: "#23272a" }}><b>WELCOME TO TWITCH</b></h7>
                                <FollowedStreamers acc_token={this.state.local_access_token} uid={this.state.local_user_id} openModal={this.playVideo}></FollowedStreamers>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default TwitchHome;