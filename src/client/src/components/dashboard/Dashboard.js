import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Background from './DivBackground.png';
import LogoWhite from './logoWhite.png';
//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }}>
        <div className="row">
          <div className="left-align"  style={{ height: "10vh", width:"100%", backgroundColor:'black', marginTop:0}}>
            <img src={LogoWhite} style={{ height: "10vh", marginLeft:"2vh"}}></img>
            Welcome,{user.name.split(" ")[0]}!
          </div>
          <div className="row center-align" style={{height:"90vh", marginTop:0}}>
            <div className="col s1" style={{ height:"90vh", backgroundColor:'#196658'}}> </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
