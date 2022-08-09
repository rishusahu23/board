import { Button, Divider } from "@mui/material";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import mySound from "../mixkit-cartoon-kitty-begging-meow-92.wav";
import { NoEncryption } from "@mui/icons-material";

function Midlebar({
  setdraggedValue,
  setLeftPos,
  setTopPos,
  setShow,
  leftPos,
  topPos,
  show,
  setRotate,
  rotate,
  handleRight,
  handleLeft,
  handleBottom,
  handleTop,
  handleRotate,
  handleShow,
  handleRandom,
  handleSize,
  handleXY,
  handleAngle,
}) {
  const dragStart = (msg) => {
    console.log("dragStart", msg);
    setdraggedValue(msg);
  };
  const [x, setX] = useState(leftPos);
  const [y, setY] = useState(topPos);
  const [a, setA] = useState(rotate);

  const [playSound] = useSound(mySound);

  useEffect(() => {
    setX(leftPos);
    setY(topPos);
    setA(rotate);
  }, [leftPos, topPos, rotate]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleXY(x, y);
  };

  const onSubmitA = (e) => {
    e.preventDefault();
    handleAngle(a);
  };

  const formInput = {
    width: "40px",
    padding: "10px 20px",
    marginRight: "5px",
    outline: "none",
    border: "none",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowX: "auto",
        height: "100%",
        backgroundColor: "#f0f2f7",
        marginLeft: "2px",
      }}
    >
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
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Move x and y", function: handleXY })
        }
        //onClick={() => handleRight()}
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

      <form
        onSubmit={onSubmitA}
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
        draggable="true"
        onDragStart={() =>
          dragStart({
            text: "Rotate to Particular Angle",
            function: () => handleAngle(a),
          })
        }
        //onClick={() => handleRight()}
        className="text"
      >
        <label>Set Angle:</label>{" "}
        <input
          style={formInput}
          value={a}
          onChange={(e) => setA(1 * e.target.value)}
        />
        <br />
        <Button variant="contained" color="success" type="submit">
          Set
        </Button>
      </form>

      <div
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
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Move 1 step Right", function: handleRight })
        }
        onClick={() => handleRight()}
        className="text"
      >
        Move 1 step Right
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Move 1 step Left", function: handleLeft })
        }
        onClick={handleLeft}
        className="text"
      >
        Move 1 step Left
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Move 1 step Top", function: handleTop })
        }
        onClick={handleTop}
        className="text"
      >
        Move 1 step Top
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Move 1 step Bottom", function: handleBottom })
        }
        onClick={handleBottom}
        className="text"
      >
        Move 1 step Bottom
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Say Hello for 2 seconds", function: handleShow })
        }
        onClick={handleShow}
        className="text"
      >
        Say Hello for 2 seconds
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() => dragStart({ text: "Play Sound", function: "" })}
        onClick={() => playSound()}
        className="text"
      >
        Play Sound
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Rotate by 10 degree", function: handleRotate })
        }
        onClick={handleRotate}
        className="text"
      >
        Rotate by 10 degree
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: " Go To random position", function: handleRandom })
        }
        onClick={handleRandom}
        className="text"
      >
        Go To random position
      </div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          height: "20px !important",
          margin: "10px 100px 10px 10px ",
          textAlign: "center",
          color: "#f3efef",
        }}
        draggable="true"
        onDragStart={() =>
          dragStart({ text: "Increase size", function: handleSize })
        }
        onClick={handleSize}
        className="text"
      >
        Increase size
      </div>
    </div>
  );
}

export default Midlebar;
