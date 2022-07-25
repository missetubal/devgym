import React from 'react';
import { Button, Div, Span, TransparentSpan } from '../../styles/general.styles';
import { Container, Feature, Header, Plan, PlansCard } from './Plans.style';
import { plansData } from '../../data/PlansData';

//assets
import WhiteTick from '../../assets/whiteTick.png'

const Plans: React.FC = () => {
  return (
    <Container>
        <Header>
            <TransparentSpan>Ready to start</TransparentSpan>
            <Span>Your Jorney</Span>
            <TransparentSpan>Now with us</TransparentSpan>
        </Header>
        <PlansCard>
            {plansData.map((plan, index)=>(
                <Plan key={index}>
                    {plan.icon}
                    <Span>{plan.name}</Span>
                    <Span>${plan.price}</Span>
                    <Feature>
                        {plan.features.map((feature, index)=>(
                            <Div>
                                <img src={WhiteTick} alt="" />
                                <Span key={index}>{feature}</Span>
                            </Div>
                        ))}
                    </Feature>
                    <Div>
                        <Span>See more benefits </Span>
                    </Div>
                    <Button>Join Now</Button>
                </Plan>
            ))}
        </PlansCard>
    </Container>
  )
}

export default Plans;