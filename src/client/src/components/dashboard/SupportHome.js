import React, { Component } from "react";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';
import { Button } from '@material-ui/core';
import BasicTextFields from './SupportPage.js';

class SupportHome extends Component {
    render() {
        return (
            <div >
                <div className="row" style={{ backgroundColor: "#99aab5" }}>
                    <HeaderBar></HeaderBar>
                    <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
                        <NavPane>
                        </NavPane>
                        <div className="column s10">WELCOME TO SUPPORT!</div>
                        <BasicTextFields></BasicTextFields>
                    </div>

                </div>
            </div>
        );
    }
}
export default SupportHome;