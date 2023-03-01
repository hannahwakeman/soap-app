import { useEffect, useState } from "react";
import { ShopItem } from "../../Interfaces";
import "./ShopGridItem.scss";
import ShopItemDetailsModal from "./ShopItemDetailsModal";

export default function ShopGridItem(props: { item: ShopItem }) {
  const [isSingleWide, setIsSingleWide] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    function handleResize() {
      setIsSingleWide(window.innerWidth <= 576);
    }
    setIsSingleWide(window.innerWidth <= 576);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let containerClass: string = isSingleWide
    ? "single-wide shop-grid-item-container transition"
    : "normal-wide shop-grid-item-container transition";

  return (
    <div className={containerClass}>
      <img
        className="shop-grid-image round"
        src={props.item.images[0]}
        alt={""}
        onClick={handleOpen}
      />
      <div className="shop-item-label">
        <p>{props.item.itemName}</p>
      </div>
      <div
        className={props.item.sale ? "shop-item-price sale" : "shop-item-price"}
      >
        <p>
          {props.item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <ShopItemDetailsModal
        item={props.item}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
}
