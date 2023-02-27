import Carousel from "react-bootstrap/Carousel";
import * as React from "react";
import "./ImageCarousel.scss";
import { ImageCarouselInput } from "../../Interfaces";

export default function ImageCarousel(props: {
  images: ImageCarouselInput[];
  width?: string;
  height?: string;
}) {
  const images: ImageCarouselInput[] = props.images;

  const carouselItems = images.map((image) => (
    <Carousel.Item>
      <img
        className="d-block w-100 round"
        src={image.imageSrc}
        alt={image.label || ""}
      />
      <Carousel.Caption>
        <h5>{image.label || null}</h5>
        <p>{image.subLabel || null}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  const width = props.width ? props.width : "auto";
  const height = props.height ? props.height : "auto";

  let style = {
    width: width,
    height: height,
  };

  return (
    <Carousel className="carousel font-gelasio" style={style}>
      {carouselItems}
    </Carousel>
  );
}
