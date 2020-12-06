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

  constructor(props) {
    super(props);
    this.state = {
      showComponent:false,
      url:null
    }
    this.playVideo = this.playVideo.bind(this)
    this.closeVideo = this.closeVideo.bind(this)
  }

  playVideo(url){
    console.log("Image clicked!");
    this.setState({showComponent:true, url:url});
  }

  closeVideo(){
    this.setState({showComponent:false})
  }
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
            {this.state.showComponent?
                <div className="col-lg-12 -dialog"
                     style=
                         {{position:"absolute", display:"block", overflow:"hidden",
                           zIndex: 1050, webkitOverflowScrolling: "touch",
                           height: "calc(100% - 14vh)", width: "calc(100% - 20vh)", left:"20vh"}}>
                  <div className="modal-content -dialog" style={{height:"100%"}}>
                    <div className="emdeb-responsive embed-responsive-16by9 z-depth-1-half" style={{height:"100%"}}>
                      <button style={{position:"absolute", display:"block", overflow:"hidden",
                        zIndex: 1050, webkitOverflowScrolling: "touch",
                        height: "5vh", width: "15vh", left:"120vh"}} onClick={this.closeVideo}>Close Video</button>
                      <iframe className="embed-responsive-item"
                              src={this.state.url}
                              allowFullScreen={true}
                              frameBorder={30}
                              scrolling={"no"}
                              style={{height:"100%", width:"calc(100% - 20vh)"}}
                      ></iframe>
                    </div>
                  </div>
                </div>:
                null}
            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Top Games</b></h6>
              <TopGamesCarousel className="col s10"></TopGamesCarousel>
            </div>

            <div className="col s10" style={{ paddingLeft: "5vh" }}>
              <h6 className="left-align" style={{color:"#7289da", backgroundColor: "#23272a"}}><b>Top Streams</b></h6>
              <StreamersCarousel className="col s10" openModal={this.playVideo}>
              </StreamersCarousel>
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