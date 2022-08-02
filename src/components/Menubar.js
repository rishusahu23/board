import React from "react";
import { Constants } from "../utils/Constants";

const Menubar = () => {
  return (
    <div style={{display:"flex",justifyContent: "flex-start",flexDirection:"column",alignItems: "center",backgroundColor:"#5C5C5C",height: "100%",boxShadow:"box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
          <a href="#motion" style={{ height: "4rem" }}>
            <div
              style={{
                backgroundColor: "blue",
                border: "1px solid black",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem%",
                marginTop:"15px",
                
              }}
            ></div>
            <h6 style={{ marginTop: "1px",color:"white" }}>Motion</h6>
          </a>
          <a href="#looks" style={{ height: "4rem" }}>
            <div
              style={{
                backgroundColor: "purple",
                border: "1px solid black",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem%",
                marginTop:"15px",
                
              }}
            ></div>
            <h6 style={{ marginTop: "1px",color:"white" }}>Looks</h6>
          </a>
          <div style={{ height: "4rem" }}>
            <div
              style={{
                backgroundColor: "yellow",
                border: "1px solid black",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem%",
                marginTop:"15px",
                
              }}
            ></div>
            <h6 style={{ marginTop: "1px",color:"white" }}>Events</h6>
          </div>
          <a href="control" style={{ height: "4rem" }}>
            <div
              style={{
                backgroundColor: "orange",
                border: "1px solid black",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem%",
                marginTop:"15px",
                
              }}
            ></div>
            <h6 style={{ marginTop: "1px",color:"white" }}>Control</h6>
          </a>
    </div>
  );
};

export default Menubar;
