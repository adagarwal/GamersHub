import React, { Component } from "react";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';

class SupportHome extends Component {
    render() {
        return (
            <div >
                <div className="row" style={{ backgroundColor: "#99aab5" }}>
                    <HeaderBar></HeaderBar>
                    <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                        <NavPane></NavPane>
                        <div className="column s10">WELCOME TO SUPPORT!</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SupportHome;