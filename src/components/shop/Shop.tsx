import { Stack } from "react-bootstrap";
import TextCard from "../shared/TextCard";
import "./Shop.scss";
import * as shopItems from "./DummyShopData";
import ShopGrid from "./ShopGrid";
import CartIcon from "./cart/CartIcon";
import { useState } from "react";
import CartModal from "./cart/CartModal";

export default function Shop() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let elements = [
    <TextCard margin="5px">
      <div className="header-container">
        <p>Shop</p> <CartIcon onClick={handleOpen}></CartIcon>
      </div>
    </TextCard>,
  ];

  let layout = (
    <div className="shop-container">
      <Stack>
        {elements[0]}
        <ShopGrid items={shopItems.shopItems}></ShopGrid>
      </Stack>
      <CartModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );

  return layout;
}
