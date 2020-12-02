import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import GamersCarousel from "./GamesCarousel.js";
import StreamersCarousel from "./StreamersCarousel.js";
import HeaderBar from './Header.js';
import NavPane from './NavPane.js';
import TopGamesCarousel from "./TopGamesCarousel";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div >
        <div className="row" style={{ backgroundColor: "#99aab5" }}>
          <HeaderBar></HeaderBar>
          <div className="row center-align" style={{ height: "83vh", marginBottom: 0 }}>
            <NavPane></NavPane>

            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Top Games</b></h6>
              <TopGamesCarousel className="col s10"></TopGamesCarousel>
            </div>

            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Top Streams</b></h6>
              <StreamersCarousel className="col s10"></StreamersCarousel>
            </div>
            
            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Latest Releases</b></h6>
              <GamersCarousel className="col s10" ></GamersCarousel>
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