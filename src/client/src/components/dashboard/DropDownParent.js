import React from "react";
import DropDownButton from "./DropDownButton";
import DropDownGH from "./DropDownGH";

const sampleData = ["Logout"]

const DropDownParent = () => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e){
    if(drop.current != null && !e.target.closest(`.${drop.current.className}`) && open){
      setOpen(false);
    }
  }
  React.useEffect(()=>{
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div className = "dropdown" ref = {drop} style={{position:"relative", margin:"16px", width: "auto", display: "inline-block"}}>
    <DropDownButton onClick={() => setOpen(open => !open)} />
    {open && <DropDownGH/> }
    </div>
  );
};

export default DropDownParent;
