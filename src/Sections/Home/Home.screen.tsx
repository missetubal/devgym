import React from 'react';
import Navigation from '../../components/Navigation/Navigation.component';
import { BackgroundImage, Heading, ButtonsDiv, ButtonStart, CaloriesContent, CaloriesDiv, Container, Content, FigureSpan, HeartRage, HeartSpan, Join, Left, Person, Right, Subtitle, TheBestAd } from './Home.styles';
import ImagePerson from '../../assets/hero_image.png'
import BackImage from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import CaloriesImg from '../../assets/calories.png'
import { Blur, Div, Span, TransparentSpan } from '../../styles/general.styles';

import {motion} from 'framer-motion'

const Home: React.FC = () => {
  const transition = {type: 'spring', duration: 3}

  return (
    <Container>
      <Blur id='home-blur'> </Blur>
        <Left>
          <Navigation />
          <TheBestAd>
            <motion.div
              initial={{left: '238px'}}
              whileInView={{left: '8px'}}
              transition = {{...transition, type: 'tween'}} 
            >
            </motion.div>
            <Span style={{ zIndex: 2 }}>the best fitness club in the town</Span>
          </TheBestAd>
          <Heading>
            <Div>
              <TransparentSpan>Shape </TransparentSpan>
              <Span>your</Span>
            </Div>
            <Div>
              <Span>ideal body</Span>
            </Div>
            <Subtitle>
              In here we will help you to shape and build your ideal body
              and live up your life the fullest
            </Subtitle>
          </Heading>
          <Container style={{ gap: '2rem', justifyContent: 'start' }}>
            <Content>
              <FigureSpan>+140</FigureSpan>
              <FigureSpan>expert coaches</FigureSpan>
            </Content>
            <Content>
              <FigureSpan>+978</FigureSpan>
              <FigureSpan>Members Joined</FigureSpan>
            </Content>
            <Content>
              <FigureSpan>+50</FigureSpan>
              <FigureSpan>Fitness Programs</FigureSpan>
            </Content>
          </Container>
          <ButtonsDiv>
            <ButtonStart>Get Start</ButtonStart>
            <ButtonStart>Learn More</ButtonStart>
          </ButtonsDiv>
        </Left>

        <Right>
          <Join>Join Now</Join>
          <HeartRage
            initial={{right: '1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
          >
            <img src={Heart} alt='' style={{width:'2rem'}} />
            <HeartSpan>Heart Rage</HeartSpan>
            <HeartSpan>120bpm</HeartSpan>
          </HeartRage>
          <Person src={ImagePerson} />
          <BackgroundImage
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={BackImage} 
          />
          <CaloriesDiv
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
          >
            <img src={CaloriesImg} alt='' style={{width: '3rem'}} />
            <CaloriesContent>
              <Span>Calories Burned</Span>
              <Span>220 kcal</Span>
            </CaloriesContent>
          </CaloriesDiv>
        </Right>
    </Container>
  );
}

export default Home;

