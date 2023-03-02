//import Modal from "react-bootstrap/Modal";
import { ShopItem } from "../../Interfaces";
import ImageCarousel from "../shared/ImageCarousel";
import "./ShopItemDetailsModal.scss";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import ShoppingButton from "../shared/ShoppingButton";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function ShopItemDetailsModal(props: {
  item: ShopItem;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}) {
  const [modalWidth, setModalWidth] = useState("90%");

  const [quantity, setQuantity] = useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

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

  const carouselInput = props.item.images.map((image) => ({ imageSrc: image }));

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
  //create MenuItems 1-99
  const menuItems = [];
  for (let i = 1; i <= 99; i++) {
    menuItems.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
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
          <h3>{props.item.itemName}</h3>

          <ImageCarousel
            images={carouselInput}
            height={"370px"}
            width={"100%"}
            object_fit={"cover"}
          />

          <div className="center-wrapper">
            <h4 className="price main-font">
              {props.item.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h4>
          </div>
          <div className="center-wrapper">
            <Accordion className="description-accordian main-font">
              <AccordionSummary
                expandIcon={
                  <span className="material-symbols-outlined">expand_more</span>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Description
              </AccordionSummary>
              <AccordionDetails>
                <p
                  className={
                    "item-description" +
                    (modalWidth === "90%" ? " small-padding" : "")
                  }
                >
                  {props.item.itemDescription}
                </p>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="bottom-buttons flex-column stretch">
            <FormControl
              className="quantity-select"
              variant="standard"
              sx={{
                m: 5,
                width: 200,
                //center the text in the select
                "& .MuiSelect-select": {
                  textAlign: "center",
                },
                //change blue accent to red
                "& .MuiInput-underline:after": {
                  borderBottomColor: "rgb(93, 149, 131)",
                },
                //change blue font color of label to red
                "& .MuiInputLabel-root": {
                  color: "rgb(93, 149, 131)",
                },
              }}
            >
              <InputLabel id="quantity-selection">Quantity</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={quantity}
                onChange={handleChange}
                label="Quantity"
              >
                {menuItems}
              </Select>
            </FormControl>

            <div className="flex-row">
              <ShoppingButton
                onClick={props.handleClose}
                className="back"
                type="back"
              />
              <ShoppingButton
                onClick={props.handleClose}
                className="add-to-cart"
                type="add-to-cart"
              />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
