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
import SteamLogo from './SteamLogo.png';
import EpicLogo from './EpicLogo.png';
import TwitchLogo from './TwitchLogo.png';
import GameLogo from './GameLogo.png';
import StreamLogo from './StreamLogo.png';
import DropDownParent from './DropDownParent.js';

//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    const gotoHome = () => {
        window.alert("HOME!");
    }
    const gotoSteam = () => {
        window.alert("STEAM!");
    }
    const gotoEpic = () => {
        window.alert("EPIC!");
    }
    const gotoTwitch = () => {
        window.alert("TWITCH!");
    }
    const gotoHelp = () => {
        window.alert("HELP!");
    }

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
                  <DropDownParent></DropDownParent>
              </div>
            </div>
          </div>
          <div className="row center-align" style={{ height: "83vh",marginBottom:0 }}>
            <div
              className="col s1"
              style={{ height: "85vh", backgroundColor: "#2c2f33", width: "20vh", marginBottom: 0}}
            >
            <div className="left-align" style={{paddingTop: "35px",paddingLeft: "40px"}}>
                <button className="left-align" style={{border:"none",backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft:"0vh"}} onClick={()=>gotoHome()}>
		  <div className="left-align">
                	<img src={HomeLogo} style={{height: "5vh", marginTop: "2vh"}} />
		  </div>

                </button>
            </div>

            <div className="left-align" style={{paddingTop: "35px",paddingLeft: "30px"}}>
                <button className="left-align" style={{border:"none",backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft:"0vh"}} onClick={()=>gotoSteam()}>
                <div className="left-align">
                	<img src={SteamLogo} style={{height: "5vh", marginTop: "2vh"}} />
                </div>
                </button>
            </div>

            <div className="left-align" style={{paddingTop: "35px",paddingLeft: "40px"}}>
                <button className="left-align" style={{border:"none",backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft:"0vh"}} onClick={()=>gotoEpic()}>
                <div className="left-align">
                	<img src={EpicLogo} style={{height: "5vh", marginTop: "2vh"}} />
                </div>
                </button>
            </div>


            <div className="left-align" style={{paddingTop: "35px", paddingLeft: "25px"}}>
                <button className="left-align" style={{border:"none",backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft:"0vh"}} onClick={()=>gotoTwitch()}>
                <div className="left-align">
                	<img src={TwitchLogo} style={{height: "5vh", marginTop: "2vh"}} />
                </div>
		</button>
            </div>

            <div className="left-align" style={{paddingTop: "35px", paddingLeft: "40px"}}>
                <button className="left-align" style={{border:"none",backgroundColor: "#2c2f33", paddingLeft: "0px", marginLeft:"0vh"}} onClick={()=>gotoHelp()}>
                <div className="left-align">
                	<img src={HelpLogo} style={{height: "5vh", marginTop: "2vh"}} />
		</div>
		</button>
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
