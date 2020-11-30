import React from "react";
import AccountLogo from './AccountLogo.png';

const DropDownButton = ({onClick}) => (
  <button onClick={onClick} style={{ height: "8vh", marginRight: "2vh", backgroundColor:"#23272a", border:"none"}}>
    <img src={AccountLogo} style={{ height: "8vh", marginRight: "2vh"}}></img>
  </button>
);

export default DropDownButton;
