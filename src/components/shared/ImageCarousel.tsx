import Carousel from "react-bootstrap/Carousel";
import "./ImageCarousel.scss";
import { ImageCarouselInput } from "../../Interfaces";
import { useState } from "react";
import { Box, Modal } from "@mui/material";

export default function ImageCarousel(props: {
  images: ImageCarouselInput[];
  width?: string;
  height?: string;
  object_fit?: string;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  const images: ImageCarouselInput[] = props.images;

  let style: any = {};

  if (props.width) {
    style["width"] = props.width;
  }
  if (props.height) {
    style["height"] = props.height;
  }
  if (props.object_fit) {
    style["objectFit"] = props.object_fit;
  }

  const carouselItems = images.map((image, index) => (
    <Carousel.Item key={index}>
      <img
        onClick={() => handleImageClick(index)}
        style={style}
        className="d-block w-100 round"
        src={image.imageSrc}
        alt={image.label || ""}
      />

      <Carousel.Caption>
        <h5>{image.label || null}</h5>
        <p>{image.subLabel || null}</p>
      </Carousel.Caption>

      {activeIndex === index && (
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "scale-down",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "80%",
                maxHeight: "80%",
              }}
              className="popout-image"
              onClick={handleClose}
              src={image.imageSrc}
              alt={""}
            />
          </Box>
        </Modal>
      )}
    </Carousel.Item>
  ));

  return (
    <Carousel className={"carousel main-font " + props.className}>
      {carouselItems}
    </Carousel>
  );
}
