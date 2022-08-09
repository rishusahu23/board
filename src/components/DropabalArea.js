import React, { useState, useEffect } from "react";
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
  handleSize,
  handleXY,
  handleAngle,
  topPos,
  leftPos,
  rotate,
}) => {
  const [value, setValue] = useState([]);
  const [functions, setFunctions] = useState([]);
  const drop = () => {
    console.log("dropped", setdraggedValue.function);

    setValue([...value, draggedValue.text]);
    setFunctions([...functions, draggedValue.function]);
    console.log("values", [...functions, draggedValue.function]);
  };

  const [x, setX] = useState(leftPos);
  const [y, setY] = useState(topPos);
  const [a, setA] = useState(rotate);

  const handleFlagClick = () => {
    let i = 0;
    functions.map((v, ind) => {
      v &&
        setTimeout(() => {
          console.log(v, "hd", x, y);

          value[ind] === "Move x and y" ? handleXY(x, y) : v();
        }, 1000 * i++);
    });
  };

  // const [playSound] = useSound(mySound);

  useEffect(() => {
    setX(leftPos);
    setY(topPos);
    setA(rotate);
  }, [leftPos, topPos, rotate]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleXY(x, y);
  };

  // const onSubmitA = (e) => {
  //   e.preventDefault();
  //   handleAngle(a);
  // };

  const formInput = {
    width: "40px",
    padding: "10px 20px",
    marginRight: "5px",
    outline: "none",
    border: "none",
  };

  const moveXY = () => {
    return (
      <form
        onSubmit={onSubmit}
        style={{
          padding: "10px 10px 10px 10px ",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "30px !important",
          textAlign: "center",
          height: "20px Important",
          margin: "10px 100px 10px 10px ",
          color: "#f3efef",
        }}
        className="text"
      >
        <label>Set x:</label>{" "}
        <input
          style={formInput}
          value={x}
          onChange={(e) => setX(1 * e.target.value)}
        />
        <label>Set y:</label>{" "}
        <input
          style={formInput}
          value={y}
          onChange={(e) => setY(1 * e.target.value)}
        />{" "}
        <br />
        <Button variant="contained" color="success" type="submit">
          Set
        </Button>
      </form>
    );
  };

  return (
    <div style={{ backgroundColor: "#f0f2f7", height: "100%", zIndex: "99" }}>
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
          return item === "Move x and y" ? (
            <>{moveXY()}</>
          ) : (
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
