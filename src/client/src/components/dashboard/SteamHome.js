import React, { Component } from "react";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';
import Slider from "react-slick";

class SteamHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badgeCount: 3,
            lastPlayed: "34 hours",
            gamesOwned: 7,
            userGames:[],
            userGamesRedirect:[],
            recoGames: [],
            recoGamesRedirect:[]
        }
    }

    async componentDidMount() {
        const setState = this.setState.bind(this)
        const userGames = ["https://steamcdn-a.akamaihd.net/steam/apps/582160/header.jpg?t=1603213581",
            "https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg?t=1588615523",
            "https://steamcdn-a.akamaihd.net/steam/apps/322330/header_alt_assets_3.jpg?t=1607041847",
            "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1607046958",
            "https://steamcdn-a.akamaihd.net/steam/apps/1238860/header.jpg?t=1603323699",
            "https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg?t=1592866696",
            "https://steamcdn-a.akamaihd.net/steam/apps/782330/header.jpg?t=1603213568"]
        const userGamesRedirect = ["https://store.steampowered.com/app/582160/Assassins_Creed_Origins/",
                                    "https://store.steampowered.com/app/377160/Fallout_4/",
                                    "https://store.steampowered.com/app/322330/Dont_Starve_Together/",
                                    "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
                                    "https://store.steampowered.com/app/1238860/Battlefield_4/",
                                    "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
                                    "https://store.steampowered.com/app/782330/DOOM_Eternal/"]
        const recoGames = ["https://steamcdn-a.akamaihd.net/steam/apps/379720/header.jpg?t=1593395083",
                            "https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg?t=1607183044",
                            "https://steamcdn-a.akamaihd.net/steam/apps/1238810/header.jpg?t=1605894273",
                            "https://steamcdn-a.akamaihd.net/steam/apps/257420/header.jpg?t=1606304017",
                            "https://steamcdn-a.akamaihd.net/steam/apps/1454890/header.jpg?t=1606861692",
                            "https://steamcdn-a.akamaihd.net/steam/apps/1024380/header.jpg?t=1603464028",
                            "https://steamcdn-a.akamaihd.net/steam/apps/1286350/header.jpg?t=1600185460"]
        const recoGamesRedirect = ["https://store.steampowered.com/app/379720/DOOM/",
                                    "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
                                    "https://store.steampowered.com/app/1238810/Battlefield_V/",
                                    "https://store.steampowered.com/app/257420/Serious_Sam_4/",
                                    "https://store.steampowered.com/app/1454890/Titanfall/",
                                    "https://store.steampowered.com/app/1024380/Second_Extinction/",
                                    "https://store.steampowered.com/app/1286350/BPM_BULLETS_PER_MINUTE/"]
        setState({
            userGames:userGames,
            userGamesRedirect:userGamesRedirect,
            recoGames:recoGames,
            recoGamesRedirect:recoGamesRedirect
        })
    }




    render() {
        const urls = []
        const recoUrls = []
        for (let i=0; i<this.state.userGames.length; i++){
            urls.push(<div key={i}><a href={this.state.userGamesRedirect[i]} target="_blank">
                    <img src={this.state.userGames[i]} className="image" style={{height:"20vh", width:"30vh"}}></img>
            </a></div>)
        }
        for (let i=0; i<this.state.recoGames.length; i++){
            recoUrls.push(<div key={i}><a href={this.state.recoGamesRedirect[i]} target="_blank">
                <img src={this.state.recoGames[i]} className="image" style={{height:"20vh", width:"30vh"}}></img>
            </a></div>)
        }
        return (

            <div>
                <div className="row" style={{ backgroundColor: "#99aab5" }}>
                    <HeaderBar></HeaderBar>
                    <NavPane></NavPane>
                    <div className="column s10">
                        <h7 style={{color:"#7289da", backgroundColor: "#23272a", marginLeft: "65vh"}}><b>WELCOME TO STEAM</b></h7>
                    </div>
                    <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                        <div className="col col-sm-4" style={{ paddingLeft: "5vh", display:"inline"}}>
                            <div style={{borderRadius:"25px",
                                width:"350px",
                                height:"350px", color: "#7289da", backgroundColor: "#23272a"}}>
                                <h3 style={{paddingTop:"10vh"}}>Badge Counts: {this.state.badgeCount}</h3>
                            </div>
                        </div>
                        <div className="col col-sm-4" style={{ paddingLeft: "30vh", display:"inline"}}>
                            <div  style={{borderRadius:"25px",
                                width:"350px",
                                height:"350px", color: "#7289da", backgroundColor: "#23272a"}}>
                                <h3 style={{paddingTop:"10vh"}}>Last Played: <br/> {this.state.lastPlayed}</h3>
                            </div>
                        </div>
                        <div className="col col-sm-4" style={{ paddingLeft: "30vh", display:"inline"}}>
                            <div  style={{borderRadius:"25px",
                                width:"350px",
                                height:"350px", color: "#7289da", backgroundColor: "#23272a"}}>
                                <h3 style={{paddingTop:"10vh"}}>Games Owned: {this.state.gamesOwned}</h3>
                            </div>
                        </div>
                        <div className="col s10" style={{ paddingLeft: "5vh", paddingTop: "3vh"}}>
                            <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>User Owned Games</b></h6>
                            <div className="FollowedCarousel" >
                                <Slider dots={true} slidesToShow={4} arrows={true}>
                                    {urls}
                                </Slider>
                            </div>
                        </div>
                        <div className="col s10" style={{ paddingLeft: "5vh", paddingTop: "3vh"}}>
                            <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Recommended Games</b></h6>
                            <div className="FollowedCarousel" >
                                <Slider dots={true} slidesToShow={4} arrows={true}>
                                    {recoUrls}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SteamHome;