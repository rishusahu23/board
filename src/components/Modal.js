import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Divider } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DisplayImages from "./DisplayImages";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width:"50rem"
};

export default function TransitionsModal({setSelectedImage}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <div
          style={{
            width: "2.7rem",
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
         
        >
          <IconButton aria-label="icon" disabled color="primary">
            <AddPhotoAlternateIcon style={{ backgroundColor: "white" }} />
          </IconButton>
        </div>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <DisplayImages setSelectedImage={setSelectedImage} setOpen={setOpen}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
