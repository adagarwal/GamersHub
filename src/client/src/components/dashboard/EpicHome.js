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
        const userGames = ["https://cdn2.unrealengine.com/egs-dragonquestxisechoesofanelusiveage-squareenix-g1a-00-1920x1080-960515002.jpg?h=300&resize=1&w=300",
            "https://cdn1.epicgames.com/f7d5c4e850874d2c9fa043e9516a7a49/offer/EGS_TwinMirror_DONTNODEntertainment_S2-1200x1600-b9d98e951918102b7223833ca6325707.jpg?h=300&resize=1&w=300",
            "https://cdn2.unrealengine.com/egs-cavestory-nicalisincstudiopixel-s1-2560x1440-633664379.jpg?h=300&resize=1&w=300",
            "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=300&resize=1&w=300",
            "https://cdn1.epicgames.com/f3e8024474e84fd48ed6af08eb89edd0/offer/4526e932-840a-4da1-a277-a072084bba61-1200x1600-c101dbe6b505a648640116a8a442c547.jfif?h=300&resize=1&w=300",
            "https://cdn1.epicgames.com/2b352b4aea3849bd9519842dda263ac7/offer/EGS_CRSEDFOAD_DarkflowSoftware_S2-1200x1600-8fbde140981a068d2037bbbb2fc4388b.jpg?h=300&resize=1&w=300"]
        const userGamesRedirect = ["https://www.epicgames.com/store/en-US/product/dragon-quest-xi-s-echoes-of-an-elusive-age/home",
                                    "https://www.epicgames.com/store/en-US/product/twin-mirror/home",
                                    "https://www.epicgames.com/store/en-US/product/cave-story-plus/home",
                                    "https://www.epicgames.com/store/en-US/product/red-dead-redemption-2/home",
                                    "https://www.epicgames.com/store/en-US/product/crsed-f-o-a-d/home"]

        const recoGames = ["https://cdn1.epicgames.com/c3e63401d6ba410493de31ed69a798a1/offer/EGS_HeroesGeneralsWWII_RETOMOTO_S2-1200x1600-1427359bd8c5d59ac8cbf8c07a0ff211.jpg?h=300&resize=1&w=300",
                            "https://cdn1.epicgames.com/17a1f8585f9246808597b30780aaf4fb/offer/EGS_CrysisRemastered_Crytek_S2-1200x1600-45e894b4daa06064cf2ae91bccf6221b.jpg?h=300&resize=1&w=300",
                            "https://cdn1.epicgames.com/epic/offer/EGS_Diabotical_TheGDStudio_S2-860x1148-4735874e9639619fd8c049cd8ebc72a8.jpg?h=300&resize=1&w=300",
                            "https://cdn1.epicgames.com/affc33b82405457595a032f00284abd2/offer/KF2_860x1148-860x1148-3871a312bd2800d12a24e3498b1018c8.jpg?h=300&resize=1&w=300",
                            "https://cdn1.epicgames.com/epic/offer/Diesel_productv2_genesis-alpha-one_home_EGS_RadiationBlue_GenesisAlphaOne_S4-510x680-90391006fac41c8fba1d0fab7ad27ed5d619caee-510x680-070cfd3d72d0026e9ffff536f9d04b9d.jpg?h=300&resize=1&w=300",
                            "https://cdn1.epicgames.com/b6b2ef0cc19a4adaaa1cf6c7ed000dfa/offer/EGS_Godfall_CounterplayGames_S2-1200x1600-ebfebb142ab90bddf35934f0f2ff707e.jpg?h=300&resize=1&w=300",
                            "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg?h=300&resize=1&w=300"]
        const recoGamesRedirect = ["https://www.epicgames.com/store/en-US/product/heroes-and-generals-wwii/home",
                                    "https://www.epicgames.com/store/en-US/product/crysis-remastered/home",
                                    "https://www.epicgames.com/store/en-US/product/diabotical/home",
                                    "https://www.epicgames.com/store/en-US/product/killing-floor-2/home",
                                    "https://www.epicgames.com/store/en-US/product/genesis-alpha-one/home",
                                    "https://www.epicgames.com/store/en-US/product/godfall/home",
                                    "https://www.epicgames.com/store/en-US/product/ghostrunner/home"]
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