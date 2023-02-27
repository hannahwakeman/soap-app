import { useEffect, useState } from "react";
import { ShopItem } from "../../Interfaces";
import "./ShopGridItem.scss";
import ShopItemDetailsModal from "./ShopItemDetailsModal";

export default function ShopGridItem(props: { item: ShopItem }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="shop-grid-item-container">
      <img
        className="shop-grid-image round"
        src={props.item.images[0]}
        alt={""}
        onClick={() => {
          setModalShow(true);
        }}
      />
      <div className="shop-item-label">
        <p>{props.item.itemName}</p>
      </div>
      <div
        className={props.item.sale ? "shop-item-price sale" : "shop-item-price"}
      >
        <p>{props.item.price}</p>
      </div>

      <ShopItemDetailsModal
        item={props.item}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </div>
  );
}
