import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Background from "./DivBackground.png";
import LogoWhite from "./logoWhite.png";
import GamersCarousel from "./GamesCarousel.js";
import StreamersCarousel from "./StreamersCarousel.js";
import AccountLogo from './AccountLogo.png';
import HomeLogo from './HomeLogo.png';
import HelpLogo from './HelpLogo.png';
import GameLogo from './GameLogo.png';
import StreamLogo from './StreamLogo.png';

//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div >
        <div className="row" style={{backgroundColor: "gray"}}>
          <div
            className="row left-align"
            style={{
              height: "10vh",
              width: "100%",
              backgroundColor: "black",
              marginTop: 0,
            }}
          >
            <div className="col s1 left-align" style={{marginBottom: 0}}>
              <img
                src={LogoWhite}
                style={{ height: "10vh", marginLeft: "2vh" }}
              ></img>
            </div>
            <div className="col s11 right-align" style={{marginBottom: 0}}>
              <div className="col s11 right-align">
                <h5 className="right-align " style={{ color: "white" }}>
                  {" "}
                  Welcome, {user.name.split(" ")[0]}!{" "}
                </h5>
              </div>
              <div className="col s1 right-align">
                <img src={AccountLogo} style={{ height: "8vh", marginLeft: "2vh", paddingTop: "10px"}}></img>
              </div>
            </div>
          </div>
          <div className="row center-align" style={{ height: "70vh" }}>
            <div
              className="col s1"
              style={{ height: "80vh", backgroundColor: "#196658" }}
            >
            <div className="left-align">
                <img src={HomeLogo} style={{height: "8vh", paddingTop: "20px"}} />
                <h7 style={{color: "white", paddingLeft:"5px", fontSize: "90%"}}>Home</h7>
            </div>

            <div className="left-align">
                <img src={GameLogo} style={{height: "8vh", paddingTop: "20px"}} />
                <h7 style={{color: "white", paddingLeft:"5px", fontSize: "90%"}}>Game</h7>
            </div>

            <div className="left-align">
                <img src={StreamLogo} style={{height: "8vh", paddingTop: "20px"}} />
                <h7 style={{color: "white", paddingLeft:"5px", fontSize: "90%"}}>Stream</h7>
            </div>

            <div className="left-align">
                <img src={HelpLogo} style={{height: "8vh", paddingTop: "20px"}} />
                <h7 style={{color: "white", paddingLeft:"5px", fontSize: "90%"}}>Help</h7>
            </div>
            </div>
            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align">Latest Releases</h6>
              <GamersCarousel className="col s10" ></GamersCarousel>
            </div>

            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align">Latest Releases</h6>
              <StreamersCarousel className="col s10"></StreamersCarousel>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);

/*
<button
    style={{
      width: "150px",
      borderRadius: "3px",
      letterSpacing: "1.5px",
      marginTop: "1rem",
    }}
    onClick={this.onLogoutClick}
    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
  >
  Logout
</button>
*/
