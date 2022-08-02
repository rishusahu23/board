import React from "react";
import logo from "../bird.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "2.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        color:"white",
        boxShadow: "box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"
      }}
    >
      {/* <img src={logo} style={{ height: "2.5rem", width: "10rem" }} /> */}
      <div style={{margin:"0px 50px 0px 25px",fontWeight:"bold"}}>Scratch</div>

      <div style={{margin:"0px 50px 0px 25px",fontSize:".9rem"}} >Create</div>
      <div style={{margin:"0px 50px 0px 25px",fontSize:".9rem"}}>Explore</div>
      <div style={{margin:"0px 50px 0px 25px",fontSize:".9rem"}}>About</div>
    </div>
  );
};

export default Header;
