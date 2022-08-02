import React, { useState } from "react";
import { IconButton, Divider } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import button, {
  BorderDiv,
  BtnCon,
  HelloDiv,
  RotateDiv,
  StyledImg,
} from "./skin";
import helloImage from "../Hello.png";

import Modal from "./Modal";

const Rightbar = ({ leftPos, topPos, show, rotate, size }) => {
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.assets.scratch.mit.edu/internalapi/asset/bcf454acf82e4504149f7ffe07081dbc.svg/get/"
  );
  return (
    <div>
      <StyledImg left={`${leftPos}px`} top={`${topPos}px`} size={`${size}px`}>
        <RotateDiv rotate={rotate}>
          <img
            src={selectedImage}
            style={{ width: size.width, height: size.height,zIndex:"-99" }}
          />
          <HelloDiv>
            {show && <img src={helloImage} height={"50px"} width={"50px"} />}
          </HelloDiv>
        </RotateDiv>
      </StyledImg>
      <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
        <Modal setSelectedImage={setSelectedImage} />
      </div>
    </div>
  );
};

export default Rightbar;
