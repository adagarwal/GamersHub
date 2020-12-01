import React, { Component } from "react";
import HomeLogo from './HomeLogo.png';
import HelpLogo from './HelpLogo.png';
import SteamLogo from './SteamLogo.png';
import EpicLogo from './EpicLogo.png';
import TwitchLogo from './TwitchLogo.png';
import Dashboard from './Dashboard.js';
import { Link } from 'react-router-dom';

class NavPane extends Component {


    render() {
        return (
            <div
                className="col s1"
                style={{ height: "85vh", backgroundColor: "#2c2f33", width: "20vh", marginBottom: 0 }}
            >
                <div className="left-align" style={{ paddingTop: "35px", paddingLeft: "40px" }}>
                    <Link to="/dashboard">
                        <button className="left-align" style={{ border: "none", backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft: "0vh" }}>
                            <div className="left-align">
                                <img src={HomeLogo} style={{ height: "5vh", marginTop: "2vh" }} />
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="left-align" style={{ paddingTop: "35px", paddingLeft: "30px" }}>
                    <Link to="/steamhome">
                        <button className="left-align" style={{ border: "none", backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft: "0vh" }}>
                            <div className="left-align">
                                <img src={SteamLogo} style={{ height: "5vh", marginTop: "2vh" }} />
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="left-align" style={{ paddingTop: "35px", paddingLeft: "40px" }}>
                    <Link to="/epichome">
                        <button className="left-align" style={{ border: "none", backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft: "0vh" }}>
                            <div className="left-align">
                                <img src={EpicLogo} style={{ height: "5vh", marginTop: "2vh" }} />
                            </div>
                        </button>
                    </Link>
                </div>


                <div className="left-align" style={{ paddingTop: "35px", paddingLeft: "25px" }}>
                    <Link to="/twitchhome">
                        <button className="left-align" style={{ border: "none", backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft: "0vh" }}>
                            <div className="left-align">
                                <img src={TwitchLogo} style={{ height: "5vh", marginTop: "2vh" }} />
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="left-align" style={{ paddingTop: "35px", paddingLeft: "40px" }}>
                    <Link to="/supporthome">
                        <button className="left-align" style={{ border: "none", backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft: "0vh" }}>
                            <div className="left-align">
                                <img src={HelpLogo} style={{ height: "5vh", marginTop: "2vh" }} />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavPane;