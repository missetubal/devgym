import React from 'react';
import { Container, FooterContainer, SocialMedia } from './Footer.style';

//assets
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import { Div } from '../../styles/general.styles';


const Footer: React.FC = () => {
    return (
        <Container id='footer'>
            <hr />
            <FooterContainer>
                <SocialMedia>
                    <img src={Github} alt='' />
                    <img src={Instagram} alt='' />
                    <img src={Linkedin} alt='' />
                </SocialMedia>
                <Div>
                    <img src={Logo} alt='' style={{width: '10rem'}}/>
                </Div>
            </FooterContainer>
        </Container>
    )
}

export default Footer;