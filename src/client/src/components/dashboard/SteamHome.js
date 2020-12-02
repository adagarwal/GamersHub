import React, { Component } from "react";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';

class SteamHome extends Component {
    render() {
        return (
            <div >
                <div className="row" style={{ backgroundColor: "#99aab5" }}>
                    <HeaderBar></HeaderBar>
                    <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                        <NavPane></NavPane>
                        <div className="column s10">
                        <h7 style={{color:"#7289da", backgroundColor: "#23272a"}}><b>WELCOME TO STEAM</b></h7>
                         <div style={{marginTop: "15%"}}>
                         <button style={{height: "10vh", width: "30vh", backgroundColor: "#23272a", paddingLeft: "0px", marginLeft: "0vh" }}>
                          <b style={{color:"#7289da", paddingLeft: "10%"}}>LOGIN</b>    
                         </button> 
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SteamHome;