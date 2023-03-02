import { Col, Container, Row } from "react-bootstrap";
import { ShopItem } from "../../Interfaces";
import "./ShopGrid.scss";
import ShopGridItem from "./ShopGridItem";

export default function ShopGrid(props: { items: ShopItem[] }) {
  const gridItems = props.items.map((item, index) => (
    <Col className="column" sm={6} lg={3} key={index}>
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
