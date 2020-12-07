import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { Dropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

const liCls =
  "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";

class DropDownGH extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render(){
    return(
      <div className="shadow h-auto w-56 absolute">
      <ul className="text-left" style={{position: "absolute", display: "block"}}>
        <li role="menu" className={liCls} style = {{backgroundColor:"#23272a",
          color:"#7289da",
          borderStyle:"solid",
          borderColor:"white",
          width:"100px"}} onClick = {this.onLogoutClick}>
          Logout User
        </li>
      </ul>
    </div>
  );
  }
}

DropDownGH.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(DropDownGH);
