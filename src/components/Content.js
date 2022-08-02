import React, { useState } from "react";
import Menubar from "./Menubar";
import Middlebar from "./Middlebar";
import Rightbar from "./Rightbar";
import DropabalArea from "./DropabalArea";

const Content = () => {
  const [draggedValue, setdraggedValue] = useState({ text: "", function: "" });
  const [leftPos, setLeftPos] = useState(10);
  const [topPos, setTopPos] = useState(10);
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [size,setSize]=useState({width:95,height:100})

  const handleRight = () => {
    setLeftPos(leftPos + 10);
    console.log(leftPos);
  };
  const handleLeft = () => {
    if (leftPos >= 10) setLeftPos(leftPos - 10);
    console.log(leftPos);
  };
  const handleBottom = () => {
    setTopPos(topPos + 10);
    console.log(leftPos);
  };
  const handleTop = () => {
    if (topPos >= 10) setTopPos(topPos - 10);
    console.log(topPos);
  };

  const handleRotate = () => {
    if (leftPos >= 10 || topPos >= 10) setRotate(rotate + 10);
    console.log(leftPos, topPos);
  };
  const handleShow = () => {
    setShow(true);
    this.timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    console.log(leftPos);
  };

  const handleRandom=()=>{
    setLeftPos( Math.floor(Math.random() * (310 - 20 + 1) + 20));
    setTopPos(Math.floor(Math.random() * (310 - 20 + 1) + 20));
  }

  const handleSize=()=>{
    console.log("size",size)
    if(size.width<=310 && size.height<=310)
    setSize({
      width:size.width+20,
      height:size.height+20
    })

  }

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flex: 1 }}>
        <Menubar />
      </div>
      <div style={{ border: "1px solid #97989b", flex: 4 }}>
        <Middlebar
          setdraggedValue={setdraggedValue}
          setLeftPos={setLeftPos}
          setTopPos={setTopPos}
          setShow={setShow}
          leftPos={leftPos}
          topPos={topPos}
          show={show}
          setRotate={setRotate}
          rotate={rotate}
          handleRight={handleRight}
          handleLeft={handleLeft}
          handleBottom={handleBottom}
          handleTop={handleTop}
          handleRotate={handleRotate}
          handleShow={handleShow}
          handleRandom={handleRandom}
          setSize={setSize}
          size={size}
          handleSize={handleSize}
        />
      </div>
      <div style={{ border: "1px solid #97989b", flex: 4 }}>
        <DropabalArea
          setdraggedValue={setdraggedValue}
          draggedValue={draggedValue}
          handleRight={handleRight}
          handleLeft={handleLeft}
          handleBottom={handleBottom}
          handleTop={handleTop}
          handleRotate={handleRotate}
          handleShow={handleShow}
          handleRandom={handleRandom}
          handleSize={handleSize}
        />{" "}
      </div>
      <div style={{ border: "1px solid #97989b", flex: 5 }}>
        <Rightbar
          leftPos={leftPos}
          topPos={topPos}
          show={show}
          rotate={rotate}
          size={size}
        />
      </div>
    </div>
  );
};

export default Content;
