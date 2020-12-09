import React, { Component } from "react";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';
import Slider from "react-slick";

class DiscordHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div className="row" style={{ backgroundColor: "#99aab5" }}>
                    <HeaderBar></HeaderBar>
                    <NavPane></NavPane>
                    <div className="column s10">
                        <h7 style={{color:"#7289da", backgroundColor: "#23272a", marginLeft: "65vh"}}><b>WELCOME TO GAMERSHUB DISCORD</b></h7>
                    </div>
                    <div style={{paddingLeft: "320px"}}>
                    <iframe src="https://titanembeds.com/embed/786047921891573790" height="500" width="800" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default DiscordHome;