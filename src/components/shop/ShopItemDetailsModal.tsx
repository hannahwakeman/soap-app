import Modal from "react-bootstrap/Modal";
import { ShopItem } from "../../Interfaces";
import ImageCarousel from "../shared/ImageCarousel";
import "./ShopItemDetailsModal.scss";

export default function ShopItemDetailsModal(props: {
  item: ShopItem;
  show: boolean;
  onHide: () => void;
}) {
  const carouselInput = props.item.images.map((image) => ({ imageSrc: image }));

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="font-gelasio shop-item-details-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item.itemName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="carousel-container">
          <ImageCarousel
            images={carouselInput}
            height={"500px"}
            width={"100%"}
            object_fit={"cover"}
          />
        </div>

        <h1 className="price">{props.item.price}</h1>
        <p>{props.item.itemDescription}</p>

        <div className="bottom-section">
          <input></input> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
