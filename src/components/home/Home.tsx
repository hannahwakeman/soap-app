import * as React from 'react';
import ImageCarousel from '../shared/ImageCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';
import { ImageCarouselInput } from '../../Interfaces';
import Stack from 'react-bootstrap/Stack';
import TextCard from '../shared/TextCard';

export default function Home(props: { isMobile: any; }) {

  let isMobileInitCheck: boolean = window.innerWidth <= 1200;

  const imageListTop: ImageCarouselInput[] = [
    {
      imageSrc: 'https://i.ibb.co/gz24zLd/image2.jpg',
      label: 'Bee Soap',
    },
    {
      imageSrc: 'https://i.ibb.co/P5dWZVY/image3.jpg',
      label: 'More Soap',
    },
    {
      imageSrc: 'https://i.ibb.co/gRkBtBs/image1.png',
      label: 'Goat Soap',
      subLabel: 'Soap from a bunch o goats',
    },
  ];

  const imageListBottom: ImageCarouselInput[] = [
    {
      imageSrc:
        'https://i.ibb.co/z5HdBry/Screen-Shot-2023-02-25-at-2-55-18-PM.png',
    },
    {
      imageSrc:
        'https://i.ibb.co/sWj06KN/Screen-Shot-2023-02-25-at-2-55-38-PM.png',
    },
    {
      imageSrc:
        'https://i.ibb.co/r5985HY/Screen-Shot-2023-02-25-at-2-56-15-PM.png',
    },
  ];

  const text1: string = `Pyramus and Thisbe stood on opposite sides of the wall, their
  hearts aching with longing. They had been forbidden to see each other by their families, but they had found a way to communicate through a crack in the wall. They made plans to meet under the cover of night, but tragedy struck before they could be reunited.`;

  const text2: string = `Dante descended deeper and deeper into the Inferno, guided by the poet Virgil. They passed through the circles of Hell, where the souls of the damned were tormented for their sins. Dante felt a mixture of pity and horror as he witnessed their suffering, but he knew that he must continue on his journey.`;

  let layout;

  let elements = [
    <h1 className="title">Summer Baby Studios</h1>,
    <ImageCarousel images={imageListTop} />,
    <TextCard>
      <p>{text1}</p>
    </TextCard>,
    <TextCard>
      <p>{text2}</p>
    </TextCard>,
    <ImageCarousel
      images={imageListBottom}
      width={!props.isMobile && !isMobileInitCheck ? '800px' : ''}
    />,
  ];

  if (!props.isMobile && !isMobileInitCheck) {
    layout = (
      <div>
        {elements[0]}
        <Container>
          <Row className="row">
            <Col>{elements[1]}</Col>
            <Col>{elements[2]}</Col>
          </Row>
          <Row className="row">
            <Col>{elements[3]}</Col>
            <Col>{elements[4]}</Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    layout = (
      <div className="homeMobileLayout">
      <Stack gap={3} className="stack">
        {elements[0]}
        {elements[1]}
        {elements[2]}
        {elements[3]}
        {elements[4]}
      </Stack>
      </div>
    );
  }

  return layout;
}
