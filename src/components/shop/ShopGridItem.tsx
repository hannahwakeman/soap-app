import { ShopItem } from "../../Interfaces";
import "./ShopGridItem.scss";

export default function ShopGridItem(props: { item: ShopItem }) {
  // let isMobileInitCheck: boolean = window.innerWidth <= 1200;

  /*   images: string[];
  itemName: string;
  price: number;
  itemDescription: string;
  options?: ShopItemVariety[]; */

  let elements = [
    <div className="shop-grid-item-container">
      <img
        className="shop-grid-image round"
        src={props.item.images[0]}
        alt={""}
      />
      <div className="shop-item-label">
        <p>{props.item.itemName}</p>
      </div>
      <div
        className={props.item.sale ? "shop-item-price sale" : "shop-item-price"}
      >
        <p>{props.item.price}</p>
      </div>
    </div>,
  ];

  /*   let layout = (
    <div className="shopGridContainer">
      <Container>
        <Row>
          <Col>{elements[0]}</Col>
        </Row>
      </Container>
    </div>
  ); */

  return elements[0];
}
