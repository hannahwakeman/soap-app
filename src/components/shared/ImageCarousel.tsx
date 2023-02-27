import Carousel from "react-bootstrap/Carousel";
import * as React from "react";
import "./ImageCarousel.scss";
import { ImageCarouselInput } from "../../Interfaces";

export default function ImageCarousel(props: {
  images: ImageCarouselInput[];
  width?: string;
  height?: string;
  object_fit?: string;
}) {
  const images: ImageCarouselInput[] = props.images;

  let style: any = {};

  if (props.width) {
    style["width"] = props.width;
  }
  if (props.height) {
    style["height"] = props.height;
  }
  if (props.object_fit) {
    style["object-fit"] = props.object_fit;
  }
  const carouselItems = images.map((image) => (
    <Carousel.Item>
      <img
        style={style}
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

  /*   let style = {
    width: width,
    height: height,
  }; */

  return <Carousel className="carousel font-gelasio">{carouselItems}</Carousel>;
}
