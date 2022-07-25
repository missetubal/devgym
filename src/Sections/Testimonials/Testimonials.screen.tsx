import React, { useState } from 'react';
import { Div, Span, TransparentSpan } from '../../styles/general.styles';
import { Container, Left, Right } from './Testimonials.style';
import { testimonialsData } from '../../data/TestimonialsData';

//assets
import ArrowRight from '../../assets/rightArrow.png'
import ArrowLeft from '../../assets/leftArrow.png'

const Testimonials: React.FC = () => {
    const [index, setIndex] = useState(0)
    return (
        <Container id='testimonials'>
            <Left>
                <Span>testimonials</Span>
                <TransparentSpan>what they</TransparentSpan>
                <Span>say about us</Span>
                <Span>
                    {testimonialsData[index].review}
                </Span>
                <Span>
                    <Span>
                        {testimonialsData[index].name} {" "}
                    </Span>
                    - {testimonialsData[index].status}
                </Span>
            </Left>
            <Right>
                <Div></Div>
                <Div></Div>
                <img src={testimonialsData[index].image} alt='' id='personImage' />
                <Div>
                    <img
                        onClick={()=> {
                            index===0
                            ? setIndex(testimonialsData.length-1)
                            : setIndex((prev)=>prev-1)
                        }}
                        src={ArrowLeft} alt='' 
                    />
                    <img 
                        src={ArrowRight} alt='' 
                        onClick={()=>{
                            index === testimonialsData.length-1 
                            ? setIndex(0)
                            : setIndex((next)=> next+1)
                        }}
                    />
                </Div>
            </Right>
        </Container>
    )
}

export default Testimonials;