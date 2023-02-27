import { Stack } from "react-bootstrap";
import TextCard from "../shared/TextCard";
import "./Shop.scss";
import * as shopItems from "./DummyShopData";
import ShopGrid from "./ShopGrid";

export default function Shop() {
  // let isMobileInitCheck: boolean = window.innerWidth <= 1200;

  let elements = [
    <TextCard margin="5px">
      <p className="main-header">Shop</p>
    </TextCard>,
  ];

  let layout = (
    <div className="shopContainer">
      <Stack>
        {elements[0]}
        <ShopGrid items={shopItems.shopItems}></ShopGrid>
      </Stack>
    </div>
  );

  return layout;
}
