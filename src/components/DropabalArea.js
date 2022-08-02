import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";

const DropabalArea = ({
  setdraggedValue,
  draggedValue,
  handleRight,
  handleLeft,
  handleBottom,
  handleTop,
  handleRotate,
  handleShow,
  handleRandom,
  size,
  handleSize
}) => {
  const [value, setValue] = useState([]);
  const [functions, setFunctions] = useState([]);
  const drop = () => {
    console.log("dropped", setdraggedValue.text);

    setValue([...value, draggedValue.text]);
    setFunctions([...functions, draggedValue.function]);
    console.log("values", [...functions, draggedValue.function]);
  };

  const handleFlagClick = () => {
      let i=0;
 functions.map(value=>{
     value&&setTimeout(()=>{ console.log(value);value()},1000*i++);
 })
  };

  return (
    <div style={{ backgroundColor: "#f0f2f7", height: "100%",zIndex:"99" }}>
      <FlagIcon
        style={{ color: "green", fontSize: "40px" }}
        onClick={handleFlagClick}
      />
      <div
        onDragOver={(ev) => ev.preventDefault()}
        onDrop={drop}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          height: "100%",
        }}
      >
        {value.map((item) => {
          return (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "10px 100px 10px 10px", borderRadius: "5px" }}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default DropabalArea;
