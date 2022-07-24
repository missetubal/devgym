import React from 'react';
import { Container, Details, Left, Partners, Right, Title } from './Reasons.style';
// assets
import Nike from '../../assets/nike.png'
import Tick from '../../assets/tick.png'
import Adidas from '../../assets/adidas.png'
import NB from '../../assets/nb.png'
import Image01 from '../../assets/image1.png'
import Image02 from '../../assets/image2.png'
import Image03 from '../../assets/image3.png'
import Image04 from '../../assets/image4.png'
import { Div, Span, TransparentSpan } from '../../styles/general.styles';

const Reasons: React.FC = () => {
  return (
    <Container id='reasons'>
      <Left>
        <img src={Image01} alt="" />
        <img src={Image02} alt="" />
        <img src={Image03} alt="" />
        <img src={Image04} alt="" />
      </Left>
      <Right>
        <Span id='regular'>some reason</Span>
        <Title>
          <TransparentSpan>why </TransparentSpan>
          <Span>choose us?</Span>
        </Title>
        <Div>
          <Details>
            <Div>
              <img src={Tick} alt='' />
              <Span>Over 140+ expert coachs</Span>
            </Div>
            <Div>
              <img src={Tick} alt='' />
              <Span>train smarter and faster than before</Span>
            </Div>
            <Div>
              <img src={Tick} alt='' />
              <Span>1 free program for new member</Span>
            </Div>
            <Div>
              <img src={Tick} alt='' />
              <Span>reliable partners</Span>
            </Div>
          </Details>
          <Span style={{ color: 'var(--gray)', fontWeight: 'bold'}}>OUR PARTNERS</Span>
          <Partners>
            <img src={NB} alt='' />
            <img src={Adidas} alt='' />
            <img src={Nike} alt='' />
          </Partners>
        </Div>
      </Right>
    </Container>
  )
}

export default Reasons;