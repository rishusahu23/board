import { Button, Divider } from "@mui/material";
import useSound from "use-sound";
import mySound from "../mixkit-cartoon-kitty-begging-meow-92.wav";

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
  handleSize
}) {
  const dragStart = (msg) => {
    console.log("dragStart", msg);
    setdraggedValue(msg);
  };

  const [playSound] = useSound(mySound);

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
        onDragStart={() => dragStart({text:"Move 1 step Right",function:handleRight})}
        onClick={handleRight}
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
