import React from 'react';
import { Container, Logo, Nav, Pages } from './Navigation.styles';
import LogoImage from '../../assets/logo.png'


const Navigation: React.FC = () => {
  return (
    <Container>
        <Logo src={LogoImage}/>
        <Nav>
            <Pages>Home</Pages>
            <Pages>Programs</Pages>
            <Pages>Why Us</Pages>
            <Pages>Plans</Pages>
            <Pages>Testimonials</Pages>
        </Nav>
    </Container>
  );
}

export default Navigation;