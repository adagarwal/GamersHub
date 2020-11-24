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
        <div className="row" style={{backgroundColor: "#99aab5"}}>
          <div
            className="row left-align"
            style={{
              height: "12vh",
              width: "100%",
              backgroundColor: "#23272a",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <div className="col s1 left-align" style={{marginBottom: 0}}>
              <img
                src={LogoWhite}
                style={{ height: "10vh", marginLeft: "2vh", marginTop: "1vh" }}
              ></img>
            </div>
            <div className="col s11 right-align" style={{marginBottom: 0}}>
              <div className="col s11 right-align">
                <h5 className="right-align " style={{ color: "#7289da", marginTop: "4vh" }}>
                  {" "}
                  Welcome, {user.name.split(" ")[0]}!{" "}
                </h5>
              </div>
              <div className="col s1 right-align">
                <img src={AccountLogo} style={{ height: "8vh", marginLeft: "2vh", marginTop: "2vh"}}></img>
              </div>
            </div>
          </div>
          <div className="row center-align" style={{ height: "83vh",marginBottom:0 }}>
            <div
              className="col s1"
              style={{ height: "85vh", backgroundColor: "#2c2f33", width: "20vh", marginBottom: 0}}
            >
            <div className="left-align" style={{paddingTop: "10px",paddingLeft: "40px"}}>
                <div className="left-align">
                	<img src={HomeLogo} style={{height: "5vh", marginTop: "2vh"}} />
		</div>
                <div className="left-align">
                	<h7 style={{ color: "#7289da", paddingTop: "20px", fontSize: "100%"}}>Home</h7>
		</div>
            </div>

            <div className="left-align" style={{paddingTop: "10px",paddingLeft: "40px"}}>
                <div className="left-align">
                	<img src={GameLogo} style={{height: "5vh", marginTop: "2vh"}} />
                </div>
                <div className="left-align">
                	<h7 style={{color: "#7289da", paddingTop:"20px", fontSize: "100%"}}>Game</h7>
		</div>
            </div>

            <div className="left-align" style={{paddingTop: "10px", paddingLeft: "40px"}}>
                <div className="left-align">
                	<img src={StreamLogo} style={{height: "5vh", marginTop: "2vh"}} />
                </div>
                <div className="left-align">
                	<h7 style={{color: "#7289da", paddingTop:"20px", fontSize: "100%"}}>Stream</h7>
		</div>
            </div>

            <div className="left-align" style={{paddingTop: "10px", paddingLeft: "40px"}}>
                <div className="left-align">
                	<img src={HelpLogo} style={{height: "5vh", marginTop: "2vh"}} />
		</div>
                <div className="left-align">
                	<h7 style={{color: "#7289da", paddingTop:"20px", fontSize: "100%"}}>Help</h7>
		</div>
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
