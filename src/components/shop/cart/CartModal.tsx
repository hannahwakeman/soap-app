import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { useEffect, useState } from "react";

export default function CartModal(props: {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}) {
  const [modalWidth, setModalWidth] = useState("90%");

  function findSize(): string {
    let size: string = "";
    if (window.innerWidth > 800) {
      size = "700px";
    } else {
      size = "90%";
    }
    return size;
  }

  useEffect(() => {
    function handleResize() {
      setModalWidth(findSize());
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: modalWidth,
    maxHeight: "100%",
    overflowY: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const options = [];
  for (let i = 1; i <= 99; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <p> MODALLLLL</p>
        </Box>
      </Fade>
    </Modal>
  );
}
