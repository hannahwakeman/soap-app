import * as React from 'react';
import TextCard from '../shared/TextCard';
import './About.scss';
export default function About(props: { isMobile: any; }) {
  let isMobile = props.isMobile;
  if (isMobile){}
  return (
    <div className="aboutContainer">
      <TextCard margin="5px">
        <p>
          <b>Our Soaps</b>
        </p>
      </TextCard>
      <TextCard margin="5px">
        <p>We make a lot of soaps. Here are some of the soaps we make:</p>
        <p>&nbsp;</p>
        <p>Lavender</p>
        <p>Honey</p>
        <p>Goatsmilk</p>
        <p>Goats</p>
        <p>Peanutbutter</p>
        <p>&nbsp;</p>

        <img
          className="d-block w-100 round"
          src="https://inventora.com/wp-content/uploads/2022/12/how-to-be-a-successful-soap-maker.jpg"
          alt=''
        />
        <p>&nbsp;</p>
      </TextCard>
    </div>
  );
}
