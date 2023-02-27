import { Col, Container, Row } from "react-bootstrap";
import { ShopItem } from "../../Interfaces";
import "./ShopGrid.scss";
import ShopGridItem from "./ShopGridItem";

export default function ShopGrid(props: { items: ShopItem[] }) {
  // let isMobileInitCheck: boolean = window.innerWidth <= 1200;

  //for each shopitem, create a ShopGridItem, then add to elements
  const gridItems = props.items.map((item, index) => (
    <Col className="column" sm={6} lg={3}>
      <ShopGridItem key={index} item={item}></ShopGridItem>
    </Col>
  ));

  let layout = (
    <Container>
      <Row className="row">{gridItems}</Row>
    </Container>
  );

  return layout;
}
