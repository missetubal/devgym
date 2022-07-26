import React from 'react';
import Navigation from '../../components/Navigation/Navigation.component';
import { AdDiv, BackgroundImage, BigTitle, ButtonsDiv, ButtonStart, CaloriesContent, CaloriesDiv, CaloriesImage, CaloriesSpan, Container, Content, FigureSpan, HeartImage, HeartRage, HeartSpan, Join, Left, Person, Right, Subtitle, TheBestAd } from './Home.styles';
import ImagePerson from '../../assets/hero_image.png'
import BackImage from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import CaloriesImg from '../../assets/calories.png'
import { Blur, Div, Span, TransparentSpan } from '../../styles/general.styles';


const Home: React.FC = () => {
  return (
    <Container>
      <Blur id='home-blur'> </Blur>
        <Left>
          <Navigation />
          <TheBestAd>
            <AdDiv></AdDiv>
            <Span style={{ zIndex: 2 }}>the best fitness club in the town</Span>
          </TheBestAd>
          <BigTitle>
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
          </BigTitle>
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
          <HeartRage>
            <HeartImage src={Heart} />
            <HeartSpan>Heart Rage</HeartSpan>
            <HeartSpan>120bpm</HeartSpan>
          </HeartRage>
          <Person src={ImagePerson} />
          <BackgroundImage src={BackImage} />
          <CaloriesDiv>
            <CaloriesImage src={CaloriesImg} />
            <CaloriesContent>
              <CaloriesSpan>Calories Burned</CaloriesSpan>
              <CaloriesSpan>220 kcal</CaloriesSpan>
            </CaloriesContent>
          </CaloriesDiv>
        </Right>
    </Container>
  );
}

export default Home;

