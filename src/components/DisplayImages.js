import React from "react";
import { Constants } from "../utils/Constants";

const DisplayImages = ({setSelectedImage,setOpen}) => {

    const handleClick=(image)=>{
        console.log("handleClick",image)
        setSelectedImage(image);
        setOpen(false);
    }
  return (
    <div style={{ backgroundColor: "#edf7fe" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "auto",
        }}
      >
        {Object.entries(Constants.images).map((image) => {
          return (
            <div
              style={{
                margin: "4px 10px 4px 10px",
                backgroundColor: "white",
                borderRadius: "4%",
              }}
              id="images"
              onClick={()=>handleClick(image[1])}
            >
              <img src={image[1]} style={{ height: "6rem", width: "7rem" }} />
              <h4 style={{ textAlign: "center" }}>{image[0]}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayImages;
