import React, { Component } from "react";
import PropTypes from "prop-types";
import LogoWhite from "./logoWhite.png";
import {connect} from "react-redux";
import DropDownParent from "./DropDownParent";

class HeaderBar extends Component {
    render() {
        const { user } = this.props.auth;
        return (
            <div
                className="row left-align"
                style={{
                    height: "14vh",
                    width: "100%",
                    backgroundColor: "#23272a",
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div className="col s1 left-align" style={{ marginBottom: 0 }}>
                    <img
                        src={LogoWhite}
                        style={{ height: "10vh", marginLeft: "2vh", marginTop: "1vh" }}
                    ></img>
                </div>
                
                <div className="col s11 right-align" style={{ marginBottom: 0 }}>
                    <div className="col s11 right-align">
                        <h5 className="right-align " style={{ color: "#7289da", marginTop: "4vh" }}>
                            {" "}
                            Welcome, {user.name.split(" ")[0]}!{" "}
                        </h5>
                    </div>
                    <div className="col s1 right-align">
                        <DropDownParent></DropDownParent>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderBar.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(HeaderBar);